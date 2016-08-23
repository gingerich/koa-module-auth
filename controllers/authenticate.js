function authenticateControllerFactory (app) {
  app.controller('authenticate', (ctx, next) => {
    ctx.status = 200
    ctx.body = ctx.state.user
  })
  return function authenticateController (ctx) {
    // await ctx.state.user.save()
    ctx.status = 200
    ctx.body = ctx.state.user
  }
}

exports = module.exports = authenticateControllerFactory
