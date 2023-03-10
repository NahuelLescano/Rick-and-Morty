import { useState } from 'react';
import Styles from './Form.module.css';
import Validation from './Validation.js';

export default function Form({ login, logout }) {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(Validation({
      ...userData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    if (Object.entries(errors).length === 0) {
      login(userData);
      setErrors(Validation({
        username: '',
        password: '',
      }));
    } else alert('Error');
  }

  return (
    <div className={Styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.formGroup}>
          <label htmlFor='username'>Username: </label>
          <input
            id='username'
            name='username'
            placeholder='Enter your username'
            type='email'
            value={userData.username}
            onChange={handleInputChange}
            className={errors.username && Styles.warning}
          />
          <p className={Styles.danger}>{errors.username}</p>
        </div>

        <div className={Styles.formGroup}>
          <label htmlFor='password'>Password: </label>
          <input
            id='password'
            name='password'
            placeholder='Enter your password'
            type='password'
            value={userData.password}
            onChange={handleInputChange}
            className={errors.password && Styles.warning}
          />
          <p className={Styles.danger}>{errors.password}</p>
        </div>
        <button
          type='submit'
          className={Styles.button}
        >Login</button>
      </form>
    </div>
  );
}
