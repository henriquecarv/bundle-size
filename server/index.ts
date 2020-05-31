import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

import koa from 'koa'
import cors from '@koa/cors'
import favicon from 'koa-favicon'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import compression from 'compression'
import connect from 'koa-connect'

import router from './routes'
import defaultReturn from './middlewares/Next/defaultReturn'
import { host, port, nodeEnv } from './config/variables'

const app = new koa()

const isProduction = nodeEnv === 'production'

if (!isProduction) {
  app.use(logger())
} else {
  app.use(connect(compression()))
}

// Next JS requirement
app.use(defaultReturn())
app.use(helmet())
app.use(cors())
app.use(favicon(`${__dirname}/../public/favicon.ico`))
app.use(router.routes()).use(router.allowedMethods())

app.listen(port)

// eslint-disable-next-line no-console
console.info(`listening on ${host}:${port}`)
