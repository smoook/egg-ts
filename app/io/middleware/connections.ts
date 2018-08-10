import { Context } from 'egg'

export default function connectionIOMiddleware () {
  return async (ctx: Context, next: () => Promise<any>) => {
    ctx.socket.emit('res', 'connected!')

    await next()
    // execute when disconnect.
    console.log('disconnection!')
  }
}
