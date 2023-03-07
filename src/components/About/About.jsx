import Styles from './About.module.css';

export default function About() {
  return (
    <div>
      <div className={Styles.container}>
        <h1>Welcome to my Rick and Morty web page!</h1>
        <p>
          I'm full-stack student, and this is a proyect to practice what I learnt.
        </p>
        <p>
          I've also studied computer engineering.
        </p>
        <p>Created by: Nahuel</p>
      </div>
    </div>
  );
}
