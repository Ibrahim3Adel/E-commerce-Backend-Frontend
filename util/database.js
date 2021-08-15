const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-sql1', 'root', 'HE23717338332ma', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
