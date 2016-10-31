




'use strict';

 var mysql = require('mysql');

 var connection = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password: '123456789',
 database: 'medical'
 });
 connection.query(
 'SELECT *  FROM TEST',
 function (err, results, fields) {
 console.log(results);
 connection.end();
 }
 );
