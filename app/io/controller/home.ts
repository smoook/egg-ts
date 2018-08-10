import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async server() {
    const { ctx } = this
    const message = `hi, ${ctx.args[0]}`
    await ctx.socket.emit('res', `Hi! I've got your message: ${message}`)
  }
}
