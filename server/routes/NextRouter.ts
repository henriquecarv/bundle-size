import Router from 'koa-router';
import handleRoutes from './../middlewares/Next/handleRoutes';
import render from './../middlewares/Next/render';
import { Context, Next } from 'koa';

const nextRouter = new Router();

nextRouter.get(
  '/package/:name',
  async (ctx: Context, next: Next) => {
    // eslint-disable-next-line no-console
    console.log('ctx prev', ctx.params, ctx.query);
    await next();
  },
  render('Package')
);
nextRouter.all('*', handleRoutes());

export default nextRouter;
