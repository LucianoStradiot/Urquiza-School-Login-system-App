import React from 'react';
import Aside from '../../Shared/Aside';
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <Aside page={'home'} />
      <main>
        <section className={styles.container}>
          <div className={styles.title}>Bienvenidos</div>
          <div className={styles.subContainer}>
            <img src="assets/urquizaSchool.jpg" alt="urquiza-school" className={styles.img} />
            <div className={styles.historyContainer}>
              <h3>Historia de la escuela</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia commodi quaerat
                mollitia nisi aperiam veniam sapiente fuga magni, nostrum modi tenetur. Qui nisi
                sunt iure cum ducimus totam mollitia ullam. Repellendus numquam ad officiis! Iure,
                accusamus.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
