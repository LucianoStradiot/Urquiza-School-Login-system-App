import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';
import Aside from '../../../Components/Shared/Aside';
import Modal from '../../../Components/Shared/Modal';
import Spinner from '../../../Components/Shared/Spinner';
import axiosClient from '../../../Components/Shared/Axios';
import { useParams } from 'react-router';
import { FiEdit } from 'react-icons/fi';
import { useModalContext, useStateContext } from '../../../Components/Contexts';

const Profile = () => {
  const { modalState, closeModal } = useModalContext();
  const { user } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [students, setStudents] = useState(null);
  const { id } = useParams();

  const getStudents = async (id) => {
    setIsLoading(true);
    try {
      const { data } = await axiosClient.get(`/students/${id}`);
      setStudents(data.data);
    } catch (err) {
      console.error('Error en la solicitud:', err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getStudents(id);
  }, [id]);

  return (
    <>
      <Aside page={'home'} user={user} />
      {modalState.isOpen && (
        <Modal description={modalState.description} isOpen={modalState.isOpen} close={closeModal} />
      )}
      <section className={styles.container}>
        {isLoading && <Spinner />}
        <div className={styles.content}>
          <div className={styles.photoContainer}>
            <div className={styles.photoContainer}>
              <input
                id="fileInput"
                type="file"
                className={styles.inputProfile}
                style={{ display: 'none' }}
              />
              <span className={styles.profileHover}>
                <FiEdit className={styles.editIcon} />
              </span>
              <img id="upload" /* src={students.profilePhoto} */ className={styles.profilePhoto} />
            </div>
          </div>
          <div className={styles.subContainer}>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Name</label>
              <p className={styles.p}>{students?.name}</p>
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>DNI</label>
              <p className={styles.p}>{students?.dni}</p>
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Email</label>
              <p className={styles.p}>{students?.email}</p>
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Career</label>
              <p className={styles.p}>{students?.career}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
