let favorites = [];

const postFav = (request, response) => {
  const { character } = request.body;

  try {
    favorites = [...favorites, character];
    response.status(200).json(favorites);
  } catch(error) {
    response.status(500).json({ error: error.message });
  }
}

const deleteFav = (request, response) => {
  const { id } = parseInt(request.params);

  try {
    const filteredFav = favorites.filter(fav => fav.id === id);
    response.status(200).json(filteredFav);
  } catch(error) {
    response.status(500).json({ error: error.message });
  }
}

module.exports = {
  postFav,
  deleteFav
};
