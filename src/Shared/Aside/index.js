import React from 'react';
import { Link } from 'react-router-dom';
import styles from './aside.module.css';

const Aside = ({ page }) => {
  if (page === 'home') {
    return (
      <>
        <aside className={styles.aside}>
          <div className={styles.asideSubContainer}>
            <img src="assets/logo.png" alt="logo-DS" className={styles.logo} />
            <nav className={styles.navbar}>
              <ul className={styles.rutes}>
                <Link to="/auth/login" className={styles.btn}>
                  <li>Login</li>
                </Link>
                <Link to="/" className={styles.btn}>
                  <li>Home</li>
                </Link>
                <Link to="/activities" className={styles.btn}>
                  <li>Carreras</li>
                </Link>
                <Link to="/schedule" className={styles.btn}>
                  <li>Inscripciones</li>
                </Link>
              </ul>
            </nav>
          </div>
        </aside>
      </>
    );
  }
};

export default Aside;
