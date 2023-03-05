import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import './App.css';

const URL = 'https://rickandmortyapi.com/api/character/';

export default function App () {
  const [characters, setCharacters] = useState([]);
  const onSearch = character => {
    fetch(`${URL}${character}`)
      .then(response => response.json())
      .then(data => {
        if (characters.some(character => character.id === data.id))
          alert('This character has already been added.');
        else if(data.name)
          setCharacters([...characters, data]);
        else
          alert('There are not characters with this id.');
      });
  };

  const onClose = id => {
    setCharacters(characters.filter(character => character.id !== id));
  }

  //const getRandomCharacters = () => {
  //  let randomNumber = Math.floor(Math.random() * Math.abs(characters.length - 826))
  //  setCharacters(characters[randomNumber]);
  //}

  return (
    <div className='App'>
     <NavBar
       onSearch={onSearch}
     />
      <Routes>
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
          path='/detail/:detailId'
          element={<Detail />}
        />
      </Routes>
   </div>
  );
}
