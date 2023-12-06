const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employee', 'root', 'Ritikgoyal@123', {
  host: 'localhost',
  dialect: 'mysql',
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkConnection();

module.exports = sequelize;
