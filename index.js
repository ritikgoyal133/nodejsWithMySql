const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/User'); // Import the User model
const Contact = require('./models/Contact');

app.use(bodyParser.json()); // Parse JSON

// User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)

// Using User.sync({ force: true }) will drop the 'User' table if it exists and re-create the 'User' table.
// Caution: This operation will delete the existing 'User' table and its data, then recreate an empty 'User' table.
// User.sync({ force: true });

// User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

// Drop the Users table 
// User.drop();
// Contact.sync({ force: true })

// Respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('App will listen on: http://localhost:3000');
});
