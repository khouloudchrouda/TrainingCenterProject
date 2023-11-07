const { env } = require('process');

console.log("env.ASPNETCORE_HTTPS_PORT" , env.ASPNETCORE_HTTPS_PORT)
const target = 'https://localhost:44369'

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/_configuration",
      "/.well-known",
      "/Identity",
      "/connect",
      "/ApplyDatabaseMigrations",
      "/_framework"
   ],
    proxyTimeout: 10000,
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
