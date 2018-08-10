import * as SocketIO from 'socket.io'
import HomeController from './controller/home'

declare module 'egg' {
  export interface Application {
    io: SocketIO.Server & EggSocketIO & Namespace
  }

  export interface Context {
    socket: any
  }

  interface EggSocketIO {
    middleware: CustomMiddleware
    controller: CustomController
  }

  /** declare custom middlerwares (connectionMiddleware & packetMiddlerware) in app/io */
  interface CustomMiddleware {
    packet(): any
  }
  /** declare custom controllers in app/io */
  interface CustomController {
    home: HomeController
  }

  interface Namespace {
    route(event: string, handler: Function): any
  }
}
