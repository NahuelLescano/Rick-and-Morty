import { useState } from 'react';
import Styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState('');

  const handleChange = event => {
    setCharacter(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setCharacter('');
  };

   return (
     <form onSubmit={handleSubmit}>
       <div className={Styles.container}>
         <input
           value={character}
           onChange={handleChange}
           className={Styles.input}
           type='search'
           placeholder='Search for a character'
         />
         <button
           type='submit'
           className={Styles.button}
           onClick={() => onSearch(character)}>
           Add
         </button>
       </div>
     </form>
   );
}
