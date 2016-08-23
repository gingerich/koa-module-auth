const jwt = require('jsonwebtoken')

function createTokenMiddlewareFactory (app) {
  app.controller('createToken', (ctx, next, config) => {
    const { user } = ctx.state
    const secret = config.get('jwt.secretOrKey')
    user.token = jwt.sign(user, secret, {
      expiresIn: '7d',
      issuer: 'lively',
      subject: user.email,
      audience: config.get('http.url')
    })
    // ctx.state.user.generateToken()
    // ctx.state.user.save()
    next()
  }, 'config')
}

exports = module.exports = createTokenMiddlewareFactory
