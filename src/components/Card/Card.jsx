import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import { addFav, removeFav } from '../../redux/actions/actions';
import Styles from './Card.module.css';

export function Card({ id, name, species, image, gender,
                       onClose, addFav, removeFav,
                       myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, image, gender, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach(fav => {
      if (fav.id === id) setIsFav(true);
    });
  }, [myFavorites, id]);

  return (
    <div className={Styles.card}>
      <div className={Styles.containerImg}>
        <button
          className={Styles.btn}
          onClick={onClose}
        >X</button>
        <img src={image} alt={id} className={Styles.img} />
        {(isFav) ? (
            <button
              className={Styles.fav}
              onClick={handleFavorite}>❤</button>
              ) : (
            <button
              className={Styles.noFav}
              onClick={handleFavorite}>❤︎</button>
          )}
      </div>

      <div>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}

export function mapStateToProps({ myFavorites }) {
  return {
    myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: character => dispatch(addFav(character)),
    removeFav: id => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
