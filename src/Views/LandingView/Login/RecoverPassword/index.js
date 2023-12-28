import React, { useRef, useState } from 'react';
import styles from './recoverPassword.module.css';
import Aside from '../../../../Components/Shared/Aside';
import TextInput from '../../../../Components/Shared/TextInput';
import Button from '../../../../Components/Shared/Button';
import Modal from '../../../../Components/Shared/Modal';
import Spinner from '../../../../Components/Shared/Spinner';
import axiosClient from '../../../../Components/Shared/Axios';
import { useModalContext, useStateContext } from '../../../../Components/Contexts';

function RecoverPassword() {
  const { modalState, openModal } = useModalContext();
  const { setUser } = useStateContext();
  const emailRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const payload = {
      email: emailRef.current.value
    };

    try {
      const { data } = await axiosClient.post('/password/forgot', payload);

      setUser(data.user);
      openModal({
        description: 'Email enviado correctamente',
        chooseModal: false
      });
    } catch (err) {
      if (err.response && err.response.status === 422) {
        const apiErrors = err.response;

        if (apiErrors.data.errors) {
          setErrors({
            email: apiErrors.data.errors.email?.[0]
          });
        }
      }
      if (err.response.status === 404) {
        setErrors({
          email: [err.response.data.message]
        });
      }

      openModal({
        description: 'Se produjo un error al enviar el email ',
        chooseModal: false
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Aside page={'home'} />
      {modalState.isOpen && modalState.chooseModal === false && <Modal />}
      <main>
        <section className={styles.container}>
          <div className={styles.subContainer}>
            <form className={styles.recoverContainer}>
              <TextInput
                password={'password'}
                labelName={'Recupera tu contraseña'}
                description={
                  'Por favor, escribe tu correo electrónico debajo para que puedas recuperar tu contraseña'
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
