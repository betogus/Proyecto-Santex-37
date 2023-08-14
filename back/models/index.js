const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const connectionUri = process.env.DB_URL; // Obtén la Connection URI de las variables de entorno
const db = {};

const sequelize = new Sequelize(connectionUri, {
  dialect: 'mysql',
  dialectOptions: {
    timezone: '-03:00',
    dateStrings: true,
    typeCast: true,
  },
  logging: false, // Desactiva los logs de Sequelize si lo deseas
});

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
