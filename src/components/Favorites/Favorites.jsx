import { connect } from 'react-redux';
// Note: add styling...
export function Favorites({ myFavorites }) {
  console.log(myFavorites);
  return (
    <div>
      <h1>Favorites:</h1>
      {(myFavorites.length !== 0) ? myFavorites.map(fav => (
      <div key={fav.id}>
        <img
          src={fav.image}
          alt={fav.id}
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
