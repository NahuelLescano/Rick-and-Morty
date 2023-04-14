const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';
const PORT = 3001;

const getCharById = (res, id) => {
  axios.get(`${URL}${id}`)
       .then(response => {
         const { id, name, status, species,
                 gender, origin, image } = response.data;
         res.writeHead(200, {"Content-type" : "Applicaton/json"})
         res.end(JSON.stringify({ id, name, status, species, gender, oring, image }))
       })
       .catch(reason => {
         res.writeHead(200, {"Content-type" : "Applicaton/json"})
         res.end(JSON.stringify({ error: "Character not found" }));
       });
}

module.exports = getCharById;
