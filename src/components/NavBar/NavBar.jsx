import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Styles from './NavBar.module.css';

export default function NavBar({ onSearch, logout }) {
  return (
    <div className={Styles.container}>
      <NavLink to='/home'
               activeclassname='active'>Rick and Morty</NavLink>

      <NavLink to='/about'
               activeclassname='active'>About me</NavLink>

      <NavLink to='/favorites'
               activeclassname='active'>Favorites</NavLink>

      <SearchBar onSearch={onSearch} />

      <button
        className={Styles.button}
        onClick={() => logout()}>
        Logout
      </button>
    </div>
  )
}
