import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

import Koa from 'koa';
import cors from '@koa/cors';
import favicon from 'koa-favicon';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import compression from 'compression';
import connect from 'koa-connect';

import router from './routes';
import errorHandler from './middlewares/ErrorHandler/errorHandler';
import { host, port, dev } from './config/variables';

const app = new Koa();

if (dev) {
  app.use(logger());
} else {
  app.use(connect(compression()));
}

app.use(helmet());
app.use(cors());
app.use(favicon(`${__dirname}/../public/favicon.ico`));
app.use(errorHandler());
app.use(router.routes()).use(router.allowedMethods());
app.listen(port);

// eslint-disable-next-line no-console
console.info(`listening on ${host}:${port}`);
