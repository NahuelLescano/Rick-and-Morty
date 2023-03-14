import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { orderCards, filterCards } from '../../redux/actions/actions';
import Styles from './Favorites.module.css';

export function Favorites({ myFavorites }) {
  const [order, setOrder] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = event => {
    dispatch(orderCards(event.target.value));
    setOrder(!order);
  }

  const handleFilter = event => {
    dispatch(filterCards(event.target.value));
  }

  return (
    <div>
      <label
        className={Styles.order}
        htmlFor='ordering'>Choose an option </label>
      <select
        className={Styles.inputOrder}
        id='orderning'
        onClick={handleOrder} >
        <option value=''>**Please select an option**</option>
        <option value='Ascending'>Ascending</option>
        <option value='Descending'>Descending</option>
      </select>

      <label
        className={Styles.filter}
        htmlFor='filter'>Choose an option </label>
      <select
        className={Styles.inputFilter}
        id='filter'
        onClick={handleFilter} >
        <option value=''>**Please select an option**</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>

      <h1 className={Styles.title}>Favorites:</h1>
      {(myFavorites.length !== 0) ? myFavorites.map(fav => (
      <div
        className={Styles.container}
        key={fav.id}>
        <img
          src={fav.image}
          alt={fav.id}
          className={Styles.img}
        />
        <h2>name: {fav.name}</h2>
        <h3>Species: {fav.species}</h3>
        <h3>Gender: {fav.gender}</h3>
      </div>
      )) : (
        <div>
          <h1>You don't have favorites characters yet.</h1>
        </div>
      )}
    </div>
  )
}

export function mapStateToProps({ myFavorites }) {
  return {
    myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
