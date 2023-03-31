import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addFav, removeFav } from '../../redux/actions/actions';
import Styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function Card({ id, name, species, image, gender, onClose }) {
  const [isFav, setIsFav] = useState(false);

  // https://react-redux.js.org/api/hooks
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, species, image, gender, onClose }));
    }
  };

  const myFavorites = useSelector(state => state.myFavorites);
  useEffect(() => {
    myFavorites.forEach(fav => {
      if (fav.id === id) setIsFav(true);
    });
  }, [myFavorites, id]);

  return (
    <div className={Styles.floating}>
      <div className={Styles.containerImg}>
        <button
          className={Styles.button}
          onClick={onClose}>
          X
        </button>

        <img src={image} alt={id} className={Styles.image} />

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
