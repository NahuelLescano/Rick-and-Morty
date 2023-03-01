import Card from '../Card/Card.jsx';
import Styles from './Cards.module.css';

export default function Cards({ characters }) {
   return (
      <div className={Styles.container}>
      {characters.map(character => (
         <Card
           key={character.id}
           id={character.id}
           name={character.name}
           species={character.species}
           genre={character.gender}
           image={character.image}
           onClose={() => character.onClose}
         />
      ))}
      </div>
   );
}
