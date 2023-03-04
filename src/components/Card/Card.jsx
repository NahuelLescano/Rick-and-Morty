import Styles from './Card.module.css';

export default function Card({ id, name, species,
                               genre, image, onClose }) {
   return (
     <div className={Styles.container}>
      <div className={Styles.card}>
         <button
           className={Styles.btn}
           onClick={onClose}
         >X</button>
        <img src={image} alt="name" className={Styles.img} />
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{genre}</h2>
      </div>
     </div>
   );
}
