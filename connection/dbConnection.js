const mysql = require('mysql2');

const dbConnection = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'nitinmysqlserver'
});

module.exports = dbConnection.promise();

