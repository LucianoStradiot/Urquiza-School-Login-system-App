import React, { useEffect } from 'react';
import styles from './header.module.css';

const Header = () => {
  useEffect(() => {
    const selectedRole = 'AfF';
    sessionStorage.setItem('role', selectedRole);
  }, []);

  return sessionStorage.getItem('role') === 'DS' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerDs}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
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
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : sessionStorage.getItem('role') === 'ITI' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerIti}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  );
};

export default Header;
