import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Styles from './NavBar.module.css';

export default function NavBar({ onSearch }) {
  return (
    <div className={Styles.container}>
      <NavLink to='/home'
               activeclassname='active'>Rick and Morty</NavLink>
      <NavLink to='/about'
               activeclassname='active'>About me</NavLink>
      <SearchBar onSearch={onSearch}/>
    </div>
  )
}
