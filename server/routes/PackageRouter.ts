import Router from 'koa-router';
import {
  getPackageVersions,
  getPackageSizes,
} from '../controllers/PackageController';

const packageRouter = new Router();

packageRouter.get('/:name', getPackageVersions);
packageRouter.post('/sizes/:name', getPackageSizes);

export default packageRouter;
