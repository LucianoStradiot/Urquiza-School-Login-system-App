import React from 'react';
import Aside from '../../Components/Shared/Aside';
import styles from './superAdmin.module.css';
import { BiCheck, BiX } from 'react-icons/bi';

const SuperAdmin = () => {
  return (
    <>
      <Aside page={'super-admin'} />
      <section className={styles.container}>
        <div className={styles.tableContainer}>
          <table className={styles.contTable}>
            <thead className={styles.theadTable}>
              <tr>
                <th className={`${styles.thTable} ${styles.headers} ${styles.borderLeft}`}>
                  Email
                </th>
                <th className={styles.thTable}>Nombre</th>
                <th className={styles.thTable}>Apellido</th>
                <th className={styles.thTable}>DNI</th>
                <th className={styles.thTable}>Carrera</th>
                <th className={`${styles.thTable} ${styles.headers} ${styles.borderRight}`}></th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr className={styles.rows}>
                <td className={styles.thTable}>37930691@terciariourquiza.edu.ar</td>
                <td className={styles.thTable}>Luciano</td>
                <td className={styles.thTable}>Stradiot</td>
                <td className={styles.thTable}>37930691</td>
                <td className={styles.thTable}>Desarrollo de software</td>
                <td className={styles.thTable}>
                  <BiCheck className={styles.check} />
                  <BiX className={styles.delete} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SuperAdmin;
