import { Context } from 'koa'
import { getPackage } from './../services/PackageService'
import getThreeLastVersions from './../utils/getThreeLastVersions'
import getPreviousMajorVersion from './../utils/getPreviousMajorVersion'
import orderVersions from './../utils/orderVersions'
import filterDisplayableVersions from './../utils/filterDisplayableVersions'
import {
  prepareInstallCommand,
  preparePackageVersionStats,
  getMinifiedSizes,
  getGzipSizes,
} from '../services/BundleService'
import { Stats } from 'webpack'

export const getPackageVersions = async (ctx: Context) => {
  const { name } = ctx.params

  const packageInfo = await getPackage(name)
  const { versions } = packageInfo

  const orderedVersions = orderVersions(versions)
  const lastThreeVersions = getThreeLastVersions(orderedVersions)
  const previousMajorVersion = getPreviousMajorVersion(orderedVersions)

  const displayableVersions = filterDisplayableVersions([
    ...lastThreeVersions,
    previousMajorVersion,
  ])

  ctx.body = { name, versions: displayableVersions }
}

export const getPackageSizes = async (ctx: Context) => {
  const { name } = ctx.params
  const { versions } = ctx.request.body

  const installations = versions.map((version: string) =>
    prepareInstallCommand(name, version)
  )
  await Promise.all(installations)

  const statsRun: Promise<Stats>[] = versions.map((version: string) =>
    preparePackageVersionStats(name, version)
  )

  const versionsStats = await Promise.all(statsRun)

  const sizes = getMinifiedSizes(versions, versionsStats)

  const gzipRun = sizes.map(({ prodFile }) => getGzipSizes(prodFile))

  const gzips = await Promise.all(gzipRun)

  const gzipSizes = gzips.map((gzip) => {
    const size = Number(gzip) / 1000
    return size.toFixed(1)
  })

  const minifiedSizes = sizes.map(({ minified }) => {
    const size = Number(minified) / 1000
    return size.toFixed(1)
  })

  const versionsSizes = {}

  versions.forEach((version: string, index: number) => {
    const key = `${version}`
    Object.assign(versionsSizes, {
      [key]: { minified: minifiedSizes[index], gzipped: gzipSizes[index] },
    })
  })

  ctx.body = { name, versionsSizes }
}
