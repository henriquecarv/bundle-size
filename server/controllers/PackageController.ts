/* eslint-disable no-console */
import { Context } from 'koa';
import { getPackage } from './../services/PackageService';
import getThreeLastVersions from './../utils/getThreeLastVersions';
import getPreviousMajorVersion from './../utils/getPreviousMajorVersion';
import orderVersions from './../utils/orderVersions';
import filterDisplayableVersions from './../utils/filterDisplayableVersions';
import { getPackageSizes } from '../services/BundleService';

export const getPackageVersionsSizes = async (ctx: Context) => {
  const { name } = ctx.params;

  const packageInfo = await getPackage(name);
  const { versions } = packageInfo;

  const orderedVersions = orderVersions(versions);
  const lastThreeVersions = getThreeLastVersions(orderedVersions);
  const previousMajorVersion = getPreviousMajorVersion(orderedVersions);

  const displayableVersions = filterDisplayableVersions([
    ...lastThreeVersions,
    previousMajorVersion,
  ]).reverse();

  const data = await getPackageSizes(name, displayableVersions);

  ctx.body = { name, data };
};
