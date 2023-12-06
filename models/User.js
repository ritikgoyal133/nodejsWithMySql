const { DataTypes } = require('sequelize');
const sequelize = require('./Index');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'Users',
});

module.exports = User;
