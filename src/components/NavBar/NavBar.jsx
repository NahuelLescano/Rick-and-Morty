import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Styles from './NavBar.module.css';

export default function NavBar({ onSearch }) {
  return (
    <div className={Styles.container}>
      <h1>Rick and Morty</h1>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}
