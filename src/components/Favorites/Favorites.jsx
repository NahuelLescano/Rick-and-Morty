import { connect } from 'react-redux';

export function Favorites({ myFavorites }) {
  return (
    <div>
      {myFavorites}
    </div>
  )
}

export function mapStateToProps({ myFavorites }) {
  return {
    myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
