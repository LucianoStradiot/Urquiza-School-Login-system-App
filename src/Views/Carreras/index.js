import React from 'react';
import styles from './carreras.module.css';
import Aside from '../../Shared/Aside';

const Carreras = () => {
  return (
    <>
      <Aside page={'home'} />
      <div className={styles.container}>Carreras</div>
    </>
  );
};

export default Carreras;
