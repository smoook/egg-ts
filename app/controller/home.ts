import { Controller } from 'egg'
import { Prefix, Get } from '../../lib'

Prefix('/api', 'HomeController')
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  @Get('/hello')
  async hello(){
    this.ctx.body = 'hello egg'
  }
}
