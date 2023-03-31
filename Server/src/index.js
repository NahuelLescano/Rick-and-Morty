const data = require('./Utils/Data');
const http = require('http');

const PORT = 3001;

http.createServer(({ url }, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  if (url.startsWith('/rickandmorty/character')) {
    const id = parseInt(url.split('/').pop());
    const character = data.find(value => value.id === id);
    response.writeHead(200, { 'Content-type': 'application/json' });
    return response.end(JSON.stringify(character));
  }
}).listen(PORT, 'localhost');
