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
    <section>
      <div className={Styles.formBox}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.formGroup}>
            <h2>Welcome back!</h2>
            <div className={Styles.inputBox}>
              <ion-icon name="mail-outline"></ion-icon>
              <label htmlFor='username'>Email: </label>
                <input
                  id='username'
                  name='username'
                  type='email'
                  value={userData.username}
                  onChange={handleInputChange}
                  className={errors.username && Styles.warning}
                  required />
                <p className={Styles.danger}>{errors.username}</p>
            </div>
          </div>

          <div className={Styles.formGroup}>
            <div className={Styles.inputBox}>
              <ion-icon name="lock-closed-outline"></ion-icon>
              <label htmlFor='password'>Password: </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  value={userData.password}
                  onChange={handleInputChange}
                  className={errors.password && Styles.warning} />
                <p className={Styles.danger}>{errors.password}</p>
            </div>
          </div>

          <button
            type='submit'
            className={Styles.button} >
            Login
          </button>
          </form>
        </div>
    </section>
  );
}
