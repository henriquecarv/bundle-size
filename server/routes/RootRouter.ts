import Router from 'koa-router';
import apiRouter from './ApiRouter';

const rootRouter = new Router();

rootRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

export default rootRouter;
