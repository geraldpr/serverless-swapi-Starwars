const mysql = require('mysql');


const configDB = {
    connectionLimit: 20,
    host: 'rds-curso.c8kmlmcndrgl.us-east-1.rds.amazonaws.com',
    user: 'Curso',
    password: 'serverless',
    port: '3306',
    database: 'RDSCurso',
    debug: true
};

var  pool = mysql.createPool(configDB);

module.exports = pool;