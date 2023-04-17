const express = require('express');
const server = express();

const PORT = '3001';

server.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', 'true');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  response.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );

  next();
});
server.use(express.json());
server.use('/rickandmorty', router);

server.listen(PORT, () => console.log(`Server raised in port: ${PORT}`));

module.exports = server;
