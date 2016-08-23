exports = module.exports = [
  {
    name: 'passportJwt',
    path: '/',
    skip: [{
      method: 'POST',
      path: /\/auth$/
    }, {
      path: [/\/health$/, /\/test$/]
    }]
  }
]
