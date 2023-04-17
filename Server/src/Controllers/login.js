const users = require('../Utils/users');

const login = (request, response) => {
  const { email, password } = request.query;

  try {
    const found = users.find(user => user.email.includes(email) && user.password.includes(password))
    response.status(200).json({ access: true });
  } catch(error) {
    response.status(500).json({ access: false, message: error.message });
  }
}

module.exports = login;
