const {
  PORT,
  HOST: host,
  NODE_ENV: nodeEnv,
  REGISTRY_API_URL: registryApiUrl,
} = process.env

const port = parseInt(PORT ?? '3000', 10)

export { port, host, nodeEnv, registryApiUrl }
