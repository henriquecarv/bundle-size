import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

import koa from 'koa'
import cors from '@koa/cors'
import favicon from 'koa-favicon'
import helmet from 'koa-helmet'
import logger from 'koa-logger'
import compression from 'compression'
import connect from 'koa-connect'
import bodyParser from 'koa-bodyparser'

import router from './routes'
import { defaultReturn } from 'nextjs-koa-middleware'
import { host, port, dev } from './config/variables'

const app = new koa()

if (dev) {
  app.use(logger())
} else {
  app.use(connect(compression()))
}

// Next JS requirement
app.use(defaultReturn())
app.use(helmet())
app.use(cors())
app.use(favicon(`${__dirname}/../public/favicon.ico`))
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(port)

// eslint-disable-next-line no-console
console.info(`listening on ${host}:${port}`)
