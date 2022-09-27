'use strict';
const pool = require('../../connection');
//const Responses = require("../common/Api");

module.exports.createPlanet = (event, context, callback) => {
  
  context.callbackWaitsForEmptyEventLoop = false;

  const body = JSON.parse(event.body);

  console.log(body);

  /*
  if (!body) { 
    return Responses._400({message: "Invalid request" }); 
  }
  
  if (!body.name || !body.gravity) {
    return Responses._400({message: "Missing parameters" }); 
  }
  */

  const sqlCreate = {
    name: body.name,
    climate: body.climate,
    gravity: body.gravity
  }
  
  const sql = "INSERT INTO planet SET ?  ;"

  pool.getConnection(function(err, connection){
    if(err) throw err;
    connection.query(sql,[sqlCreate],function(error, results){
      if(error){
        callback ({
          statusCode:400,
          headers:{
            'Content-Type':'application/json'
          },
          body: context.fail(JSON.stringify({
            success: false,
            message: error
          }))
        })
      }else{
        callback(null,{
          statusCode:200,
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            success: true,
            message: '¡Exito al insertar!',
            data: results
          })
        })
        connection.release();
      }
    })
  })

};