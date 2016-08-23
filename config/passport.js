const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

exports = module.exports = app => passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    done(null, { id: 0, username: 'foo', email: 'foo@bar.com' })
  })

  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    try {
      const user = { id: 0, username: 'foo', email: 'foo@bar.com', validatePassword: (pass) => pass === '123' } // await User.findOne({ username })
      if (!user) { return done(null, false) }

      try {
        const isMatch = user.validatePassword(password)

        if (!isMatch) { return done(null, false) }

        done(null, user)
      } catch (err) {
        done(err)
      }
    } catch (err) {
      return done(err)
    }
  }))

  const jwtConfig = Object.assign(app.get('auth:jwt'), {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer')
  })
  passport.use('jwt', new JwtStrategy(jwtConfig, (payload, done) => {
    // User.findOne({ email: payload.sub })
    done(null, { decoded_token: payload })
  }))
}
