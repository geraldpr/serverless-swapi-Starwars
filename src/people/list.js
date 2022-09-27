const Responses = require("../common/Api");

async function getDataPeople() {  
  const fetch = require("node-fetch");
  var response = await fetch("http://swapi.dev/api/people");
  var json = await response.json();
  return json;
}

module.exports.getPeople = async (event, context) => {
  
  try {
    
    let films = await getDataPeople();
    
    let result_renamed = films.results.map(obj => {        
      return {
        "nombre" : obj.name,
        "peso": obj.height,           
        "color_pelo": obj.hair_color,                     
        "color_piel": obj.skin_color, 
        "fecha_cumpleanios": obj.birth_year,           
        "genero": obj.gender,          
        "fecha_registro": obj.created,
        "fecha_actualizacion": obj.edited,
        "url": obj.url  
      }
    });
      
    return Responses._200({data: result_renamed });
    
  } catch (err) {    
    return Responses._200({data: "error" });    
  }
  
};