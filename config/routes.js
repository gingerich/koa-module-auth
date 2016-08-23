const joi = require('joi')

module.exports = {
  root: {
    middleware: [],
    path: '/auth'
  },
  default: {
    authenticate: {
      method: 'POST',
      path: '/',
      middleware: ['passportLocal', 'createToken'],
      schema: {
        body: joi.object().keys({
          username: joi.string().required(),
          password: joi.string().required()
        })
      }
    },
    getToken: {
      method: 'GET',
      path: '/token'
    }
  }
}
