require('dotenv').config();

const logger = require('../utils/winston.logger');
/**
 * To add new configuration create a new file in
 * the ./config folder, define the variable as an
 * object, export it and then import the file in here.
 */

const config = {
  development: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  test: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
  production: {
    logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: '0',
  },
};

module.exports = config;
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('PORT:', process.env.DB_PORT);
console.log('HOST:', process.env.DB_HOST);
console.log('DIALECT:', process.env.DB_DIALECT);