import { useState } from 'react';
import Styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setInput('');
  };

   return (
     <div className={Styles.main}>
       <h1>Rick and Morty</h1>
         <form onSubmit={handleSubmit}>
           <div className={Styles.container}>
           <input
             value={input}
             onChange={handleChange}
             className={Styles.input}
             type='search'
             placeholder='Search for a character'
           />
           <button
             type='submit'
             className={Styles.btn}
             onClick={onSearch}>
             Add</button>
           </div>
         </form>
     </div>
   );
}
