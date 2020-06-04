import Router from 'koa-router';
import packageRouter from './PackageRouter';

const apiRouter = new Router();

apiRouter.use(
  '/packages',
  packageRouter.routes(),
  packageRouter.allowedMethods()
);

export default apiRouter;
