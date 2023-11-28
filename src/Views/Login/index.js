import React, { useState } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Aside from '../../Shared/Aside';
import TextInput from '../../Shared/TextInput';
import Button from '../../Shared/Button';
import Modal from '../../Shared/Modal';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [responseModal, setResponseModal] = useState({
    title: 'Eliminacion',
    description: 'Desea rechazar al usuario?',
    confirmBtn: 'Aceptar',
    denyBtn: 'Cancelar'
  });

  const onSubmit = () => {
    setResponseModal(responseModal);
    setIsOpen(true);
  };

  const confirm = () => {
    console.log('holis');
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal
        title={responseModal.title}
        description={responseModal.description}
        confirmBtn={responseModal.confirmBtn}
        denyBtn={responseModal.denyBtn}
        isOpen={isOpen}
        close={() => setIsOpen(!isOpen)}
        onClick={() => confirm()}
      />
      <Aside page={'home'} />
      <main>
        <section className={styles.container}>
          <div className={styles.subContainer}>
            <form className={styles.loginContainer}>
              <TextInput
                labelName={'E-mail'}
                placeholderText={'Escribe tu dirección de correo electrónico'}
              />
              <TextInput labelName={'Contraseña'} placeholderText={'Escribe tu contraseña'} />
              <Link to="/recoverPassword" className={styles.password}>
                <p>Olvidaste tu contraseña?</p>
              </Link>
              <div className={styles.btnContainer}>
                <Button type="submsit" text="Enviar" onClick={onSubmit} />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
