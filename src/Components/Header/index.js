import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.title}>Escuela Superior de Comercio N°49.</h1>
      </div>
    </header>
  );
};

export default Header;
