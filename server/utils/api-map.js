const { backendMap } = require('./config')

const env = process.env.NODE_ENV || 'dev'

module.exports = backendMap[env]
