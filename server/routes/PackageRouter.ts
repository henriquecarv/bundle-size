import Router from 'koa-router';
import { getPackageVersionsSizes } from '../controllers/PackageController';

const packageRouter = new Router();

packageRouter.get('/:name', getPackageVersionsSizes);

export default packageRouter;
