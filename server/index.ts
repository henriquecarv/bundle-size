/* eslint-disable no-console */
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

import Koa from 'koa';
import Router from 'koa-router';
import next from 'next';
import cors from '@koa/cors';
import favicon from 'koa-favicon';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import compression from 'compression';
import connect from 'koa-connect';
import bodyParser from 'koa-bodyparser';

import router from './routes';
// import defaultReturn from './middlewares/Next/defaultReturn';
import { host, port, dev } from './config/variables';
import nextConfig from './config/next.config';

const app = next({ dev, conf: nextConfig });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const nextRouter = new Router();

  nextRouter.get('/package/:name', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/Package', ctx.params);
    ctx.respond = false;
  });

  nextRouter.all('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  if (dev) {
    server.use(logger());
  } else {
    server.use(connect(compression()));
  }

  server.use(helmet());
  server.use(cors());
  server.use(favicon(`${__dirname}/../public/favicon.ico`));
  server.use(bodyParser());
  server.use(router.routes()).use(router.allowedMethods());

  server.use(nextRouter.routes());
  server.listen(port);

  // eslint-disable-next-line no-console
  console.info(`listening on ${host}:${port}`);
});
