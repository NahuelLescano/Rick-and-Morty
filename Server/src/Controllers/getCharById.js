const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (request, response) => {
  const { id } = request.params;
  try {
    const response = await axios(`${URL}${id}`);
    const { id, status, name, species, origin, image, gender } = response.data;
    response.status(200).json({ id, status, name, species, origin, image, gender });
  } catch(error) {
    response.status(500).json({ message: error.message })
  }
};

module.exports = getCharById;
