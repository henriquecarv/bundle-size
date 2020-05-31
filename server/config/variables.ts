const { PORT, HOST: host, NODE_ENV: nodeEnv } = process.env

const port = parseInt(PORT ?? '3000', 10)

export { port, host, nodeEnv }
