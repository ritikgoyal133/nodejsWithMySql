# nodejsWithMySql
Learning nodejs+sequelize+mysql by YouTube

npm install body-parser
<!-- Installs the "body-parser" middleware in a Node.js application for parsing incoming HTTP request bodies. Transforms the body of your request into the object that can be easily consumed by server application. -->

npm i mysql2
<!-- Install the mysql2 package in current directory and add also include in package.json file. mysql2 is a popular Node.js driver for MySQL that is known for its performance and ease of use. -->

npm install sequelize
<!-- Sequelize is a promise-based Node.js ORM tool for SQL databases. -->

npm i nodemon
<!--It is a command used in Node.js projects to install the "nodemon" package as a dependency.

nodemon is a utility that monitors for changes in your Node.js application and automatically restarts the server when changes in the codebase are detected. It helps streamline the development process by eliminating the need to manually stop and restart the server every time a change is made in your code. -->

<!-- When using `nodemon index.js` after installing the nodemon package, it's essential to add a script in the `package.json` file. By including the following script configuration:

{
    "scripts": {
    "start": "nodemon index.js"
    },
    "dependencies": {
    "body-parser": "^1.20.2",
    "express": "^4.18.2",
    "mysql2": "^3.6.5",
    "sequelize": "^6.35.1",
    "nodemon": "^3.0.2"
    }
} -->

 <!-- Enable automatic server restarts. Now, by executing npm start, the server starts automatically using nodemon, which watches for changes in your server file (in this case, index.js) and restarts the server upon detecting any modifications. -->