const { DataTypes, Model } = require('sequelize');
const sequelize = require('./Index');
class Contact extends Model {}

Contact.init({
  address1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address2: {
    type: DataTypes.STRING,
  },
}, {
  sequelize, // Pass the Sequelize instance
  modelName: 'Contact', // Set the model name
  tableName: 'Contacts', // Set the table name
});

module.exports = Contact;