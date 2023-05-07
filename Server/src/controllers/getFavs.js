const { Favorite, User } = require('../db');

const getFavs = async (req, res) => {
  const { idUser } = req.query;

  try {
    const favsUser = await Favorite.findAll({
      include: [{ model: User, where: { id: idUser } }],
    });

    res.status(200).json(favsUser);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = { getFavs };
