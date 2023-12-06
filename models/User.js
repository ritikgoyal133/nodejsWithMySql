const { DataTypes } = require('sequelize');
const sequelize = require('./Index');

//Sequelize provides two primary ways to define models: using the Sequelize.define() method and using class syntax.
//First Method: Sequelize.define()
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
  // Disable automatic timestamps for this model
  // timestamps: false,

  //Enable timestamps for this model(By default we get createdAt, UpdateAt)
  // timestamps: true,

  //Disable 'createdAt' field in this model
  // createdAt: false,

  //Rename 'updatedAt' field to 'updateTimestamp' in this model
  // updatedAt: 'updateTimestamp'
});

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true


//Second Method:  ES6 class syntax
// Using ES6 class syntax to define a model
// This method uses the class User that extends Sequelize's Model class and initializes the model attributes and options within the class.
// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('./Index');
// class User extends Model {}

// User.init({
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//   },
// }, {
//   sequelize, // Pass the Sequelize instance
//   modelName: 'User', // Set the model name
//   tableName: 'Users', // Set the table name
// });

module.exports = User;
