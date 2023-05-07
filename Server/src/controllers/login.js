const { User } = require('../db');

const login = async (req, res) => {
  const { email, password } = req.query;

  if (
    (!email || email.trim() === '') &&
    (!password || password.trim() === '')
  ) {
    return res
      .status(400)
      .json({ message: 'Please provide email and password' });
  }

  try {
    const existingUser = await User.findOne({
      where: { email },
    });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const correctPassword = await User.findOne({
      where: { password },
    });
    if (!correctPassword) {
      return res.status(403).json({ message: 'Incorrect password' });
    }

    res.status(200).json({ access: true });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = { login };
