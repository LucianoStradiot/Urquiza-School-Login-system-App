import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './aside.module.css';

const Aside = ({ page }) => {
  const [activeButton, setActiveButton] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.asideSubContainer}>
          <img src="assets/logo.png" alt="logo-DS" className={styles.logo} />
          <nav className={styles.navbar}>
            <ul className={styles.rutes}>
              {page === 'home' && (
                <>
                  <Link
                    to="/login"
                    className={`${activeButton === 'login' ? styles.active : styles.btn}`}
                    onClick={() => handleButtonClick('login')}
                  >
                    <li>Login</li>
                  </Link>
                  <Link
                    to="/"
                    className={`${activeButton === 'home' ? styles.active : styles.btn}`}
                    onClick={() => handleButtonClick('home')}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/carreras"
                    className={`${activeButton === 'carreras' ? styles.active : styles.btn}`}
                    onClick={() => handleButtonClick('carreras')}
                  >
                    <li>Carreras</li>
                  </Link>
                  <Link
                    to="/inscripciones"
                    className={`${activeButton === 'inscripciones' ? styles.active : styles.btn}`}
                    onClick={() => handleButtonClick('inscripciones')}
                  >
                    <li>Inscripciones</li>
                  </Link>
                </>
              )}
              {page === 'super-admin' && (
                <>
                  <Link
                    to="/super-admin"
                    className={`${activeButton === 'super-admin' ? styles.active : styles.btn}`}
                    onClick={() => handleButtonClick('super-admin')}
                  >
                    <li>Admin</li>
                  </Link>
                  <Link
                    to="/"
                    className={`${activeButton === 'home' ? styles.active : styles.btn}`}
                    onClick={() => handleButtonClick('home')}
                  >
                    <li>Home</li>
                  </Link>
                </>
              )}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Aside;
