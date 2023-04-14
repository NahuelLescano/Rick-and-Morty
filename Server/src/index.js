const data = require('./Utils/Data');
const http = require('http');
const getCharById = require('./Controllers/getCharById');

const PORT = 3001;

const server = http.createServer(({ url }, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  try {
    if (url.includes('/rickandmorty/character')) {
      const id = parseInt(url.split('/').pop());
      getCharById(response, id);
    }
  } catch(error) {
    console.log(error);
  }
}).listen(PORT, 'localhost');

module.exports = server;
