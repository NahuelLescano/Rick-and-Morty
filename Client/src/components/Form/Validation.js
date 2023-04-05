const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{6,10}$/;

export default function Validation({ username, password }) {
  const errors = { username: '', password: '' };
  if (!regexEmail.test(username)) errors.username = 'You must have an email address.';
  if (!regexPassword.test(password)) errors.password = 'Your password must be between 6 and 10 and have at least one number.';
  return errors;
}
