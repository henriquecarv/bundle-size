import TerserPlugin from 'terser-webpack-plugin'
import { cwd } from 'process'
import { Configuration } from 'webpack'

export default (entry: string) => {
  return {
    devtool: false,
    entry: `${cwd()}/${entry}`,
    mode: 'production',
    output: {
      path: `${cwd()}/${entry}`,
      filename: 'prod.js',
    },
    resolve: {
      modules: [`${cwd()}/${entry}/node_modules`],
    },
    performance: {
      hints: false,
    },
    externals: [],
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      dns: 'mock',
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          terserOptions: {
            output: {
              comments: false,
            },
            mangle: true,
          },
        }),
      ],
    },
  } as Configuration
}
