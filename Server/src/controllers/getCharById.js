const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
  const characterId = req.params.id;
  try {
    const resp = await axios.get(`${URL}${characterId}`);
    const { id, status, name, species, origin, image, gender } = resp.data;
    res.status(200).json({ id, status, name, species, origin, image, gender });
  } catch (error) {
    response.status(500).send('error');
  }
};

module.exports = { getCharById };
