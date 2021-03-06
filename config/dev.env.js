'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VN_CONFIG: '"dev"',
  API_ROOT: '"http://192.168.5.249:8080/dev"'
})
