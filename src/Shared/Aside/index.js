import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './aside.module.css';

const Aside = ({ page }) => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    const currentPath = location.pathname === '/' ? 'home' : location.pathname.substring(1);
    setActiveButton(currentPath);
  }, []);

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
                    className={`${activeButton === 'login' ? styles.activeBtn : styles.btn}`}
                  >
                    <li>Login</li>
                  </Link>
                  <Link
                    to="/"
                    className={`${activeButton === 'home' ? styles.activeBtn : styles.btn}`}
                  >
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/carreras"
                    className={`${activeButton === 'carreras' ? styles.activeBtn : styles.btn}`}
                  >
                    <li>Carreras</li>
                  </Link>
                  <Link
                    to="/inscripciones"
                    className={`${
                      activeButton === 'inscripciones' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    <li>Inscripciones</li>
                  </Link>
                </>
              )}
              {page === 'super-admin' && (
                <>
                  <Link
                    to="/super-admin"
                    className={`${activeButton === 'super-admin' ? styles.activeBtn : styles.btn}`}
                  >
                    <li>Admin</li>
                  </Link>
                  <Link
                    to="/"
                    className={`${activeButton === 'home' ? styles.activeBtn : styles.btn}`}
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
