import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Aside from '../../Shared/Aside';
import TextInput from '../../Shared/TextInput';
import Button from '../../Shared/Button';
const Login = () => {
  return (
    <>
      <Aside page={'home'} />
      <main>
        <section className={styles.container}>
          <div className={styles.subContainer}>
            <form className={styles.loginContainer}>
              <TextInput
                labelName={'E-mail'}
                placeholderText={'Escribe aquí tu dirección de correo electrónico'}
              />
              <TextInput labelName={'Contraseña'} placeholderText={'Escribe aquí tu contraseña'} />
              <Link to="/recoverPassword" className={styles.password}>
                <p>Olvidaste tu contraseña?</p>
              </Link>
              <div className={styles.btnContainer}>
                <Button type="submit" text="Enviar" />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
