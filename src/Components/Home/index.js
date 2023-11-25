import React from 'react';
import Aside from '../../Shared/Aside';
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <Aside page={'home'} />
      <main>
        <section>
          <div className={styles.container}>
            <img src="assets/urquizaSchool.jpg" alt="urquiza-school" className={styles.img} />
            <div className={styles.historyContainer}>
              <h3>Historia de la escuela</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia commodi quaerat
                mollitia nisi aperiam veniam sapiente fuga magni, nostrum modi tenetur. Qui nisi
                sunt iure cum ducimus totam mollitia ullam. Repellendus numquam ad officiis! Iure,
                accusamus. Praesentium maiores commodi perferendis soluta possimus sed, libero
                consectetur assumenda inventore minima asperiores quibusdam quod labore iure
                explicabo quis. Labore libero aliquam enim quas. Accusantium dignissimos distinctio
                laboriosam ratione id exercitationem tenetur, incidunt dolore doloribus, magnam
                dicta earum repudiandae ex! Obcaecati velit qui ad dignissimos nemo iusto natus,
                commodi sit eum provident totam repudiandae!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
