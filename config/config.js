const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEV,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    //dialectOptions: {
     // ssl: {
      //  require: true,
       // rejectUnauthorized: false,
      //},
    //},
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_TEST,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PRODUCTION,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
};
