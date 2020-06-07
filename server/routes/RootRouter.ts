import Router from 'koa-router';
import apiRouter from './ApiRouter';
import nextRouter from './NextRouter';

const rootRouter = new Router();

rootRouter.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
rootRouter.use(nextRouter.routes(), nextRouter.allowedMethods());

export default rootRouter;
