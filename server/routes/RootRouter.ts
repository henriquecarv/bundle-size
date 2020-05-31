import Router from 'koa-router'
import handleRoutes from '../middlewares/Next/handleRoutes'

const rootRouter = new Router()

rootRouter.all('*', handleRoutes())

export default rootRouter
