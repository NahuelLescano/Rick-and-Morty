import { connect } from 'react-redux';
import Styles from './Favorites.module.css';

export function Favorites({ myFavorites }) {
  console.log(myFavorites);
  return (
    <div>
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
