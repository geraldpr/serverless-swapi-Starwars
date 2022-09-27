const mysql = require('mysql');


const configDB = {
    connectionLimit: 20,
    host: 'rds-curso.c8kmlmcndrgl.us-east-1.rds.amazonaws.com',
    user: 'user',
    password: 'servss',
    port: '3306',
    database: 'database',
    debug: true
};

var  pool = mysql.createPool(configDB);

module.exports = pool;