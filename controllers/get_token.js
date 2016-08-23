function getTokenMiddlewareFactory (app) {
  app.controller('getToken', ctx => {
    ctx.body = ctx.state.user.decoded_token
  })
  return function getTokenMiddleware (ctx) {
    ctx.body = ctx.state.user.decoded_token
  }
}

exports = module.exports = getTokenMiddlewareFactory
