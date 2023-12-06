const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/User'); // Import the User model

app.use(bodyParser.json()); // Parse JSON
User.sync({ force: true })

// Respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('App will listen on: http://localhost:3000');
});
