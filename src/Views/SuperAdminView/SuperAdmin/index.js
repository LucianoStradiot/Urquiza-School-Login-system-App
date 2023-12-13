import React, { useEffect, useState } from 'react';
import Aside from '../../../Components/Shared/Aside';
import styles from './superAdmin.module.css';
import Modal from '../../../Components/Shared/Modal';
import { BiCheck, BiX } from 'react-icons/bi';
import { useModalContext } from '../../../Components/Contexts';
import axiosClient from '../../../Components/Shared/Axios';
import Spinner from '../../../Components/Shared/Spinner';

const SuperAdmin = () => {
  const { openModal, modalState, closeModal } = useModalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [scrollBar, setScrollBar] = useState(false);
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosClient.get('/super-admin/administration');
      setStudents(data.data);
    } catch (err) {
      console.error('Error en la solicitud:', err);
    }
    setIsLoading(false);
  };

  const onDelete = async (s) => {
    const clickDelete = async () => {
      setIsLoading(true);
      try {
        await axiosClient.delete(`/super-admin/administration/${s.id}`);
        getStudents();
        openModal({
          description: 'Estudiante rechazado con éxito'
        });
      } catch (err) {
        if (err.response === 500)
          openModal({
            description: 'Ocurrió un error. Por favor inténtelo de nuevo'
          });
      }
      setIsLoading(false);
    };

    openModal({
      title: 'Eliminación',
      description: '¿Está seguro que desea eliminar al usuario?',
      confirmBtn: 'Aceptar',
      denyBtn: 'Cancelar',
      chooseModal: true,
      onClick: clickDelete
    });
  };

  useEffect(() => {
    getStudents();
    setScrollBar(true);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <Aside page={'super-admin'} />
      {modalState.isOpen && (
        <Modal description={modalState.description} isOpen={modalState.isOpen} close={closeModal} />
      )}
      <section className={styles.container}>
        <div className={styles.tableContainer}>
          <table className={styles.contTable}>
            <thead className={styles.theadTable}>
              <tr>
                <th className={styles.thTable}>id</th>
                <th className={styles.thTable}>Nombre</th>
                <th className={styles.thTable}>DNI</th>
                <th className={styles.thTable}>Email</th>
                <th className={styles.thTable}>Carrera</th>
                <th className={styles.thTable}>Fecha de creación</th>
                <th
                  className={
                    !scrollBar
                      ? `${styles.thTable} ${styles.headers} ${styles.borderRight}`
                      : `${styles.thTable} ${styles.headers} `
                  }
                ></th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {students.map((s, index) => (
                <tr key={index} className={styles.rows}>
                  <td className={styles.thTable}>{s.id}</td>
                  <td className={styles.thTable}>{s.name}</td>
                  <td className={styles.thTable}>{s.dni}</td>
                  <td className={styles.thTable}>{s.email}</td>
                  <td className={styles.thTable}>
                    {s.career === 'AF'
                      ? 'Analista Funcional'
                      : s.career === 'DS'
                      ? 'Desarrollo de Software'
                      : s.career === 'ITI'
                      ? 'Tecnologías de la Información'
                      : null}
                  </td>
                  <td className={styles.thTable}>{s.created_at}</td>
                  <td className={styles.thTable}>
                    <BiCheck className={styles.check} />
                    <BiX onClick={() => onDelete(s)} className={styles.delete} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SuperAdmin;
