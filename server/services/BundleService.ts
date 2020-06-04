/* eslint-disable no-console */
import { cwd } from 'process';
import webpack, { Stats } from 'webpack';
import prepareWebPackConfig from './../utils/prepareWebPackConfig';
import execPromise from './../utils/execPromise';
import gzipSize from 'gzip-size';
import { readFileSync } from 'fs';
import { join } from 'path';

export const prepareInstallCommand = (name: string, version: string) => {
  const installPath = `${cwd()}/installs/${name}@${version}`;
  const createPath = `mkdir -p ${installPath} && cd ${installPath}`;
  const installCommand = `yarn add ${name}@${version} -E -s --no-lockfile --cwd ./`;
  const indexFile = `echo "require('${name}')" > index.js`;

  const mergedCommands = [createPath, indexFile, installCommand].join(' && ');

  return execPromise(mergedCommands);
};

const preparePackageVersionStats = (
  name: string,
  version: string
): Promise<Stats> => {
  const entry = `installs/${name}@${version}`;

  const webpackConfig = prepareWebPackConfig(entry);

  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run(async (err, stats) => {
      if (err || stats.hasErrors()) {
        const { errors: statsErr } = stats.hasErrors()
          ? stats.toJson()
          : { errors: {} };
        return reject({ err, statsErr });
      }
      resolve(stats);
    });
  });
};

const getGzipSizes = (path: string) => {
  return gzipSize(readFileSync(path, 'utf-8'));
};

const getMinifiedSizes = (versions: string[], versionsStats: Stats[]) => {
  return versions.map((version: string, index: number) => {
    const stats = versionsStats[index];
    const { assets } = stats.toJson();

    const { outputOptions } = stats.compilation;
    const { path, filename } = outputOptions;
    const prodFile = join(path, filename);

    const minified = assets?.find(
      ({ name }) => decodeURIComponent(name) === 'prod.js'
    );

    return {
      version,
      minified: minified?.size,
      path,
      prodFile,
    };
  });
};

export const getPackageSizes = async (name: string, versions: string[]) => {
  const installations = versions.map((version: string) =>
    prepareInstallCommand(name, version)
  );
  await Promise.all(installations);

  const statsRun: Promise<Stats>[] = versions.map((version: string) =>
    preparePackageVersionStats(name, version)
  );

  const versionsStats = await Promise.all(statsRun);

  const sizes = getMinifiedSizes(versions, versionsStats);

  const gzipRun = sizes.map(({ prodFile }) => getGzipSizes(prodFile));

  const gzips = await Promise.all(gzipRun);

  const gzipSizes = gzips.map((gzip) => {
    const size = Number(gzip) / 1000;
    return size.toFixed(1);
  });

  const minifiedSizes = sizes.map(({ minified }) => {
    const size = Number(minified) / 1000;
    return size.toFixed(1);
  });

  const data = versions.map((name, index) => {
    const min = minifiedSizes[index];
    const gzip = gzipSizes[index];

    return { name, min, gzip };
  });

  return data;
};
