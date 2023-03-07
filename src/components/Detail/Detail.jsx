import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Styles from './Detail.module.css';
const URL = 'https://rickandmortyapi.com/api/character/';

export default function Detail() {
  const { detailId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`${URL}${detailId}`)
      .then(response => response.json())
      .then(char => {
        (char.name) ? setCharacter(char) : alert('There is no character with this id.');
      })
      .catch(error => console.log(`${error}. There is no character with this id.`));
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      {character &&
       <div className={Styles.container}>
         <img
           src={character.image}
           alt={character.name}
           className={Styles.img}
         />
         <button
           onClick={() => navigate('/home')}
           className={Styles.btn}
         >Back</button>
         <h1>Name: {character.name}</h1>
         <h2>Status: {character.status}</h2>
         <h2>Specie: {character.specie}</h2>
         <h2>Gender: {character.gender}</h2>
         <h2>Origin: {character.origin?.name}</h2>
       </div>
      }
    </div>
  )
}
