import Styles from './Card.module.css';

export default function Card({ id, name, species,
                               genre, image, onClose }) {
   return (
      <div className={Styles.card}>
        <div className={Styles.containerImg}>
          <button
            className={Styles.btn}
            onClick={onClose}
          >X</button>
          <img src={image} alt="name" className={Styles.img} />
        </div>
        <div className={Styles.containerInfo}>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{genre}</h2>
        </div>
      </div>
   );
}
