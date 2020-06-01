import Router from 'koa-router'
import { handleRoutes } from 'nextjs-koa-middleware'

const nextRouter = new Router()

nextRouter.all('*', handleRoutes())

export default nextRouter
