import React, { useRef, useState } from 'react';
import styles from './recoverPassword.module.css';
import Aside from '../../../../Components/Shared/Aside';
import TextInput from '../../../../Components/Shared/TextInput';
import Button from '../../../../Components/Shared/Button';
import Modal from '../../../../Components/Shared/Modal';
import Spinner from '../../../../Components/Shared/Spinner';
/* import axiosClient from '../../../Components/Shared/Axios'; */
import { /* useStateContext */ useModalContext } from '../../../../Components/Contexts';

function RecoverPassword() {
  const { modalState /* openModal */ } = useModalContext();
  /*  const { setUser } = useStateContext(); */
  const emailRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    /* const payload = {
      email: emailRef.current.value
    }; */
    setIsLoading(true);
    setErrors({});
    /* try {
      const { data } = await axiosClient.post('/login', payload);
      if (data.user.career === 'SA') {
        setUser(data.user);
        setTokenAndRole(data.token, data.user.career);
        openModal({
          description: 'Sesión iniciada correctamente',
          chooseModal: false
        });
        navigate('/super-admin/administracion');
      } else {
        setUser(data.user);
        setTokenAndRole(data.token, data.user.career);
        openModal({
          description: 'Sesión iniciada correctamente',
          chooseModal: false
        });
        navigate('/alumno/profile');
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        const apiErrors = err.response;

        if (apiErrors.data.errors) {
          setErrors({
            email: apiErrors.data.errors.email?.[0],
            password: apiErrors.data.errors.password?.[0]
          });
        } else if (apiErrors.data.messageEmail) {
          setErrors({
            email: [apiErrors.data.messageEmail]
          });
        } else {
          setErrors({
            password: [apiErrors.data.messagePassword]
          });
        }
      }
      openModal({
        description: 'Se produjo un error al iniciar sesión',
        chooseModal: false
      });
    } */
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Aside page={'home'} />
      {modalState.isOpen && modalState.chooseModal === false ? <Modal /> : null}
      <main>
        <section className={styles.container}>
          <div className={styles.subContainer}>
            <form className={styles.recoverContainer}>
              <TextInput
                password={'password'}
                labelName={'Recupera tu contraseña'}
                description={
                  'Por favor, escribe tu correo electronico debajo para que puedas recuperar tu contraseña'
                }
                placeholderText={'Escribe tu dirección de correo electrónico'}
                refrerence={emailRef}
                error={errors.email}
              />
              <div className={styles.btnContainer}>
                <Button type="submit" text="Enviar" onClick={onSubmit} />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default RecoverPassword;
