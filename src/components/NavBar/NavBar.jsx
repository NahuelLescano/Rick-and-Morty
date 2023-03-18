import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Styles from './NavBar.module.css';

export default function NavBar({ onSearch, logout, randomCharacter }) {
  return (
    <div className={Styles.container}>
      <NavLink to='/home'
               className={({ isActive }) => isActive ? Styles.active : Styles.disable}>Rick and Morty</NavLink>

      <NavLink to='/about'
               className={({ isActive }) => isActive ? Styles.active : Styles.disable}>About me</NavLink>

      <NavLink to='/favorites'
               className={({ isActive }) => isActive ? Styles.active : Styles.disable}>Favorites</NavLink>

      <SearchBar onSearch={onSearch} />

      <button
        className={Styles.button}
        onClick={() => logout()} >
        Logout
      </button>
      <button
        className={Styles.button}
        onClick={() => randomCharacter()} >
        Random character
      </button>
    </div>
  );
}
