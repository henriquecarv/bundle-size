const {
  PORT,
  HOST: host,
  NODE_ENV: nodeEnv,
  REGISTRY_API_URL: registryApiUrl,
  NEXT_CLIENT_DIR,
} = process.env;

import { cwd } from 'process';
import { join } from 'path';

const port = parseInt(PORT ?? '3000', 10);
const dev = nodeEnv !== 'production';
const nextClientDir = join(cwd(), NEXT_CLIENT_DIR ?? '/');

export { port, host, nodeEnv, registryApiUrl, nextClientDir, dev };
