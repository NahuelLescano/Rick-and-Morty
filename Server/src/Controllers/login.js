const users = require('../Utils/users');

const login = (request, response) => {
  const { email, password } = request.query;

  try {
    const found = users.find(user => user.email === email && user.password === password);
    response.status(200).json({ access: found });
  } catch({ message }) {
    response.status(500).json({ message });
  }
}

module.exports = login;
