'use strict';
var mysql = require('mysql');

const config = { // set up config
    host : 'localhost',
    user : 'root',
    port : '3306',
    database: 'dogmd',
    password: 'password',
    multipleStatements: true, // allow multiple statement queries
}// config 

// Local mysql db connection
var connection = mysql.createConnection(config);

connection.connect(function(err) { // check if connected
    if (err) {
        throw err;
        console.log('Cannot connect to database.');
    }
    else console.log('Connected to database.')
}) // check connection

// Error handling
// connection.connect(function(err) {
//   if (err) throw err;
// });

// Export SQL conn
module.exports = connection;