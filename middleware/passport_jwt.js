function passportJwtMiddlewareFactory (app) {
  // app.controller('passportJwt', app.passport.authenticate('jwt', { session: false }))
  app.controller('passportJwt', (ctx, next, passport) => {
    return passport.authenticate('jwt', { session: false })(ctx, next)
  }, 'passport')
  // return app.passport.authenticate('jwt', { session: false })
}

exports = module.exports = passportJwtMiddlewareFactory
