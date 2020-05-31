import { Context } from 'koa'
import { getPackage } from './../services/PackageService'

export const findPackage = async (ctx: Context) => {
  const { name } = ctx.params

  const packageInfo = await getPackage(name)

  ctx.body = packageInfo
}
