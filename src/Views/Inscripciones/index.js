import React from 'react';
import styles from './inscripciones.module.css';
import Aside from '../../Shared/Aside';

const Inscripciones = () => {
  return (
    <>
      <Aside page={'home'} />
      <div className={styles.container}>Inscripciones</div>
    </>
  );
};

export default Inscripciones;
