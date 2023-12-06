const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employee', 'root', 'Ritikgoyal@123', {
  host: 'localhost',
  dialect: 'mysql',
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // Automatically synchronize all models
    // await sequelize.sync({ force: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkConnection();

// Expose the sequelize instance
// Used in Node.js modules to export the sequelize object from the current module.
module.exports = sequelize;
