/* const Sequelize = require('sequelize');
const mysql2 = require('mysql2');
const logger = require('../../utils/winston.logger');

const sequelizeOptions = {
  logging: (msg) => logger.api.debug(`Database: ${process.env.DB_DATABASE} - ${msg}`),
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialectModule: mysql2,
  dialect: 'mysql',
  operatorsAliases: '0',
  timezone: '-03:00',
  dialectOptions: {
    timezone: '-03:00',
    dateStrings: true,
    typeCast: true,
  },
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions,
);
module.exports.connection = sequelize;
 */

/* const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
  host: DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
})

module.exports = {sequelize} */