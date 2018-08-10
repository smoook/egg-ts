import { Application } from 'egg'
import { RouterHandle } from '../lib/decorators/router.decorator'

export default (app: Application) => {
  const { io } = app
  RouterHandle(app);
  (io.of('/') as any).route('server', io.controller.home.server)
}



