require('dotenv/config')
module.exports = {
  development: {
    databases: {
      main: {
        database: process.env.MARIA_NAME,
        usarname: process.env.MARIA_DB_USER,
        password: process.env.MARIA_DB_PASS,
        host: process.env.MARIA_DB_HOST,
        port: process.env.MARIA_DB_PORT,
        dialect: 'mariadb'
      }
    }
  },
  production: {
    databases: {
      main: {
        database: process.env.MARIA_NAME,
        usarname: process.env.MARIA_DB_USER,
        password: process.env.MARIA_DB_PASS,
        host: process.env.MARIA_DB_HOST,
        port: process.env.MARIA_DB_PORT,
        dialect: 'mariadb'
      }
    }
  }
}
