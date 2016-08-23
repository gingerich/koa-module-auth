const join = require('path').join
const modules = require('koa-module')
const Module = modules.Module

exports = module.exports = modules.register(function (app, config) {
  return new AuthModule(app, config)
})

class AuthModule extends Module {

  get name () {
    return 'auth'
  }

  get dirname () {
    return __dirname
  }

}

// modules.module(function (app, config, test) {
//   return new AuthModule(app, config)
// })
// .use(join(__dirname, 'modules'), {
//   name: 'test',
//   path: '/random'
// })
// .register()

exports.AuthModule = AuthModule
