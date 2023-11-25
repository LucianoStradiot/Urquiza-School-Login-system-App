import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
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
