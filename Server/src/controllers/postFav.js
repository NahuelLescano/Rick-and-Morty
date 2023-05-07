const { Favorite } = require('../db');

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (
    (!name || name.trim() === '') &&
    (!origin || origin.trim() === '') &&
    (!status || status.trim() === '') &&
    (!image || image.trim() === '') &&
    (!species || species.trim() === '') &&
    (!gender || gender.trim() === '')
  ) {
    return res.status(400).json({
      message: 'Please fill all the fields',
    });
  }

  try {
    const [createdFav] = await Favorite.findOrCreate({
      where: {
        name,
        origin,
        status,
        image,
        species,
      },
    });

    res.status(201).json(createdFav);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { postFav };
