import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Styles from './Detail.module.css';

// const URL = 'https://rickandmortyapi.com/api/character/';
const URL = 'http://localhost:3001/rickandmorty/character/';

export default function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${URL}${detailId}`);
        (data.name) ? setCharacter(data) : alert('There is no character with this id.');
      } catch(error) {
        console.log(`${error}.\nThere is no character with this id.`);
      }
    }
    fetchData();
  }, [detailId]);

  return (
    <div>
      {character &&
       <div className={Styles.container}>
         <img
           src={character.image}
           alt={character.id}
           className={Styles.image}
         />

         <button
           onClick={() => navigate('/home')}
           className={Styles.button}>
           Back
         </button>

         <h1>Name: {character.name}</h1>
         <h2>Status: {character.status}</h2>
         <h2>Species: {character.species}</h2>
         <h2>Gender: {character.gender}</h2>
         <h2>Origin: {character.origin?.name}</h2>
       </div>
      }
    </div>
  );
}
