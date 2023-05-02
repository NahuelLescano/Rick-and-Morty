// const users = require('../Utils/users');
const { User } = require('../Model/User');

const login = async (req, res) => {
  const { email, password } = req.query;

  if ((!email || email.trim() === '') &&
     (!password || password.trim() === '')) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  const existingUser = await User.findOne({
    where: { email },
  });
  if (!existingUser) {
    return res.status(404).json({ message: 'User not found' });
  }

  const existingUserEmail = await User.findOne({
    where : { password },
  });
  if (!existingUserEmail) {
    return res.status(404).json({ message: 'Incorrect password' });
  }

  try {
    res.status(200).json({ access: true });
  } catch({ message }) {
    res.status(500).json({ message });
  }
}

module.exports = login;
