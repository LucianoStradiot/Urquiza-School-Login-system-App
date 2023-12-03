import React, { useRef /* , useState */ } from 'react';
import styles from './signUp.module.css';
import { Link } from 'react-router-dom';
import axiosClient from '../../../Components/Shared/Axios';
import Aside from '../../../Components/Shared/Aside';
import TextInput from '../../../Components/Shared/TextInput';
import Button from '../../../Components/Shared/Button'; /* 
import Modal from '../../../Components/Shared/Modal';
import Spinner from '../../../Components/Shared/Spinner'; */
import { useStateContext } from '../../../Components/Contexts';

const SignUp = () => {
  /* const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseModal, setResponseModal] = useState({
    description: 'Desea rechazar al usuario?'
  }); */
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { setUser, setToken } = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      emailRef: emailRef.current.value,
      passwordRef: passwordRef.current.value,
      password_confirmation: passwordConfirmRef.current.value
    };
    axiosClient
      .post('/signup', payload)
      .this(({ data }) => {
        setUser(data.user);
        setToken(data.token);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });

    /* setIsLoading(true);
    setResponseModal(responseModal);
    setIsOpen(true); */
  };

  return (
    <>
      {/* {isLoading && <Spinner />}
      <Modal
        description={responseModal.description}
        isOpen={isOpen}
        close={() => setIsOpen(!isOpen)}
      /> */}
      <Aside page={'home'} />
      <main>
        <section className={styles.container}>
          <div className={styles.subContainer}>
            <form className={styles.loginContainer} onSubmit={onSubmit}>
              <TextInput
                refrerence={nameRef}
                labelName={'Nombre'}
                placeholderText={'Escribe tu nombre'}
              />
              <TextInput
                labelName={'E-mail'}
                refrerence={emailRef}
                placeholderText={'Escribe tu dirección de correo electrónico'}
              />
              <TextInput
                refrerence={passwordRef}
                labelName={'Contraseña'}
                placeholderText={'Escribe tu contraseña'}
              />
              <TextInput
                labelName={'Confirmar Contraseña'}
                refrerence={passwordConfirmRef}
                placeholderText={'Vuelve a escribir la contraseña'}
              />
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

export default SignUp;
