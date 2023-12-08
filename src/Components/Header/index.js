import React, { useEffect } from 'react';
import styles from './header.module.css';
import { useStateContext } from '../Contexts';

const Header = () => {
  const { user, token, setUserHeader } = useStateContext();

  useEffect(() => {
    setUserHeader(user, token);
  }, [user, token]);

  return sessionStorage.getItem('role') === 'DS' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerDs}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={`${styles.container2} ${styles.containerDs}`}>
          <div className={styles.namesTitle}>Bienvenido {user.name}!</div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : sessionStorage.getItem('role') === 'AF' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerAf}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={`${styles.container2} ${styles.containerAf}`}>
          <div className={styles.namesTitle}>Bienvenido {user.name}!</div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : sessionStorage.getItem('role') === 'ITI' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerIti}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={`${styles.container2} ${styles.containerIti}`}>
          <div className={styles.namesTitle}>Bienvenido {user.name}!</div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : sessionStorage.getItem('role') === 'SA' ? (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${styles.titleLanding}`}>
            Escuela Superior de Comercio N°49
          </h1>
        </div>
        <div className={styles.container2}>
          <div className={`${styles.namesTitle} ${styles.titleLanding}`}>
            Bienvenido Super Admin!
          </div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${styles.titleLanding}`}>
            Escuela Superior de Comercio N°49
          </h1>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  );
};

export default Header;
