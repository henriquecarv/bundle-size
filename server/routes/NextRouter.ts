import Router from 'koa-router'
import handleRoutes from '../middlewares/Next/handleRoutes'

const nextRouter = new Router()

nextRouter.all('*', handleRoutes())

export default nextRouter
