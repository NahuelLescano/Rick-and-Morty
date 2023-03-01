import Styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
   return (
     <div className={Styles.container}>
        <input
          type='search'
          placeholder='Search for a character'
        />
        <button
          className={Styles.btn}
          onClick={onSearch}>
          Agregar</button>
      </div>
   );
}
