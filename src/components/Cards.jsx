import Card from './Card';

export default function Cards({ characters }) {
   return (
      <div>
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
