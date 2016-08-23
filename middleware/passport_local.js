function passportLocalMiddlewareFactory (app) {
  // app.controller('passportLocal', app.passport.authenticate('local', { session: false }))
  app.controller('passportLocal', (ctx, next, passport) => {
    return passport.authenticate('local', { session: false })(ctx, next)
  }, 'passport')
  // return app.passport.authenticate('local', { session: false })
}

exports = module.exports = passportLocalMiddlewareFactory
