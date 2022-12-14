const Responses = require("../common/Api");

async function getMovies() {  
  try {
    const fetch = require("node-fetch");
    var response = await fetch("https://swapi.py4e.com/api/films");
    var json = await response.json();
    return json;

  } catch (error) { 
    console.log(error);
  }

}

module.exports.getFilms = async (event, context) => {
  
  try {
    
    let films = await getMovies();
    
    let result_renamed = films.results.map(obj => {        
      return {
        "titulo" : obj.title,
        "episodio_id": obj.episode_id,           
        "texto_apertura": obj.opening_crawl,                     
        "director": obj.director, 
        "productor": obj.producer,           
        "fecha_lanzamiento": obj.release_date,          
        "personajes": obj.characters,          
        "planetas": obj.planets,          
        "naves": obj.starships,          
        "vehiculos": obj.vehicles,          
        "razas": obj.species,          
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