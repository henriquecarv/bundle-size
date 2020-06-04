import next from 'next';
import { dev, nextClientDir } from './../../config/variables';
import nextConfig from './../../config/next.config';

export default () => {
  const app = next({ dev, dir: nextClientDir, conf: nextConfig });

  const init = async () => {
    await app.prepare();
  };

  init();

  return app;
};
