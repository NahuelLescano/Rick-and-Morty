import Styles from './About.module.css';
import image from '../../assets/profile-photo.jpg';

export default function About() {
  return (
    <div>
      <div className={Styles.container}>
        <h1>Welcome to my Rick and Morty web page!</h1>
        <img
        className={Styles.image}
        src={image}
        alt='profile' />
        <p>
          I'm full-stack student, and this is a proyect to practice what I learnt.
        </p>
        <p>
          I've also studied computer engineering.
        </p>
        <p>Created by: Nahuel</p>
        <a href='https://www.linkedin.com/in/nahuel-lescano-906a2618b/'>Linkedin</a>
        <a href='https://github.com/NahuelLescano'>My github</a>
        <a href='https://github.com/NahuelLescano/Rick-and-Morty'>Repo from this project!</a>
      </div>
    </div>
  );
}
