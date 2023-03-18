import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';

import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import './App.css';

export default function App () {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const URL = 'https://rickandmortyapi.com/api/character/';
  const username = 'nahuel@gmail.com';
  const password = 'nahuel1234';

  const login = userData => {
    if (userData.username === username &&
        userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

  const logout = () => {
    setAccess(false);
    navigate('/');
  }

  // Prohibit the access if the user doesn't provide
  // an username and password
  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line
  }, [access]);

  const onSearch = id => {
    fetch(`${URL}${id}`)
      .then(response => response.json())
      .then(data => {
        if (characters.some(character => character.id === data.id))
          alert('This character has already been added.');
        else if(data.name)
          setCharacters([data, ...characters]);
        else
          alert('There are not characters with this id.');
      });
  };

  const onClose = id => {
    setCharacters(characters.filter(character => character.id !== id));
  }

  const randomCharacter = () => {
    const randomId = Math.floor((Math.random() * 826) + 1);
    console.log(`Random character number: ${randomId}`);
    fetch(`${URL}${randomId}`)
      .then(response => response.json())
      .then(data => {
        if(data.name) setCharacters([data, ...characters])
      })
  }

  return (
    <div className='App'>
      {location.pathname !== '/' && <NavBar onSearch={onSearch} logout={logout} randomCharacter={randomCharacter} />}
      <Routes>
        <Route
          path='/'
          element={<Form login={login} />}
        />

        <Route
          path='/home'
          element={<Cards
                     characters={characters}
                     onClose={onClose} />}
        />

        <Route
          path='/about'
          element={<About />}
        />

        <Route
          path='/favorites'
          element={<Favorites />}
        />

        <Route
          path='/detail/:detailId'
          element={<Detail />}
        />

        {/*https://stackabuse.com/redirects-in-react-router/*/}
        <Route
          path='/ErrorPage'
          element={<ErrorPage />}
        />

        <Route
          path='/ErrorPage'
          element={<Navigate to='/ErrorPage'/>}
        />
      </Routes>
   </div>
  );
}
