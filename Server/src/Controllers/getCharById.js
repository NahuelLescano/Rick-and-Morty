const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, response) => {
  const characterId = req.params.id;
  try {
    const resp = await axios.get(`${URL}${characterId}`);
    const { id, status, name, species, origin, image, gender } = resp.data;
    response.status(200).json({ id, status, name, species, origin, image, gender });
  } catch(error) {
     response.status(500).send('error')
  }
};
// const getCharById = async (request, response) => {
//   const { ID } = request.params;
//   try {
//     const res = await axios.get(`${URL}${ID}`);
//     const { id, status, name, species, origin, image, gender } = res.data;
//     response.status(200).json({ id, status, name, species, origin, image, gender });
//   } catch(error) {
//     response.status(500).json({ message: error.message })
//   }
// };

module.exports = getCharById;
