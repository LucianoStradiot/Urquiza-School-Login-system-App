import React, { useState, useRef } from 'react';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Aside from '../../../Components/Shared/Aside';
import TextInput from '../../../Components/Shared/TextInput';
import Button from '../../../Components/Shared/Button';
import Modal from '../../../Components/Shared/Modal';
import Spinner from '../../../Components/Shared/Spinner';
import axiosClient from '../../../Components/Shared/Axios';
import { useStateContext, useModalContext } from '../../../Components/Contexts';

const Login = () => {
  const { openModal } = useModalContext();
  const { setStudent, setTokenAndRole } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({
    email: null,
    password: null
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    console.log(payload);
    setIsLoading(true);
    setErrors({});
    try {
      const { data } = await axiosClient.post('/login', payload);
      /* if (payload.email === 'superadmin@terciariourquiza.edu.ar') {
        setSuperAdmin(data.setSuperAdmin);
        setTokenAndRole(data.token, data.superAdmin.career);
        openModal({
          description: 'Sesión iniciada correctamente',
          chooseModal: false
        });
        navigate('/super-admin/administracion');
      } else { */
      setStudent(data.student);
      setTokenAndRole(data.student, data.student.career);
      openModal({
        description: 'Sesión iniciada correctamente',
        chooseModal: false
      });
      navigate('/alumno/profile');
    } catch (err) {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log(err.response);
      if (err.response && err.response.status === 422) {
        const { errors: apiErrors } = err.response.data;

        setErrors({
          email: apiErrors.email?.[0] || null,
          password: apiErrors.password?.[0] || null
        });
      }
      openModal({
        description: 'Se produjo un error en al iniciar sesión',
        chooseModal: false
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Modal />
      <Aside page={'home'} />
      <main>
        <section className={styles.container}>
          <div className={styles.subContainer}>
            <form className={styles.loginContainer}>
              <TextInput
                input={'input'}
                labelName={'E-mail'}
                placeholderText={'Escribe tu dirección de correo electrónico'}
                refrerence={emailRef}
                error={errors.email}
              />
              <TextInput
                labelName={'Contraseña'}
                placeholderText={'Escribe tu contraseña'}
                input={'input'}
                refrerence={passwordRef}
                error={errors.password}
              />
              <Link to="/recoverPassword" className={styles.password}>
                <p>Olvidaste tu contraseña?</p>
              </Link>
              <div className={styles.btnContainer}>
                <Button type="submit" text="Enviar" onClick={onSubmit} />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
