require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PW,
    "database": process.env.MYSQL_DB,
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USERNAME,
    "password": process.env.MYSQL_PW,
    "database": process.env.MYSQL_DB,
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  }
}
