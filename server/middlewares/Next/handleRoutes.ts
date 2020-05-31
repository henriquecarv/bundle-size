import next from 'next'
import { Context } from 'koa'

export default () => {
  const dev = process.env.NODE_ENV !== 'production'
  const app = next({ dev })
  const handle = app.getRequestHandler()

  const init = async () => {
    await app.prepare()
  }

  init()

  return async (ctx: Context) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  }
}
