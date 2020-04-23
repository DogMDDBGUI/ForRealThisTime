'use strict';
var mysql = require('mysql');

// Local mysql db connection
var connection = mysql.createConnection({
  host: 'dogmd_mysql_comp',
  user: 'dog',
  password: 'md',
  database: 'dogmd'
});

// Error handling
connection.connect(function(err) {
  if (err) throw err;
});

// Export SQL conn
module.exports = connection;