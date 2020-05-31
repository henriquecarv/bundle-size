import Router from 'koa-router'
import nextRouter from './NextRouter'
import apiRouter from './ApiRouter'

const rootRouter = new Router()

rootRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods())
rootRouter.use(nextRouter.routes(), nextRouter.allowedMethods())

export default rootRouter
