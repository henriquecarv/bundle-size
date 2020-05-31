import Router from 'koa-router'
import { findPackage } from '../controllers/PackageController'

const apiRouter = new Router()

apiRouter.get('/package/:name', findPackage)

export default apiRouter
