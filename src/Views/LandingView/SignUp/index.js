import React, { useRef, useState } from 'react';
import styles from './signUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../Components/Shared/Axios';
import Aside from '../../../Components/Shared/Aside';
import TextInput from '../../../Components/Shared/TextInput';
import Button from '../../../Components/Shared/Button';
import Modal from '../../../Components/Shared/Modal';
import Spinner from '../../../Components/Shared/Spinner';
import { useStateContext } from '../../../Components/Contexts';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [responseModal, setResponseModal] = useState({
    description: ''
  });
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const careerRef = useRef();

  const { setUser, setTokenAndRole } = useStateContext();
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    career: null
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      career: careerRef.current.value
    };
    console.log(payload);

    setIsLoading(true);

    try {
      const { data } = await axios.post('/signup', payload);
      setUser(data.user);
      setTokenAndRole(data.token, data.user.career);
      setResponseModal({
        description: 'Usuario registrado correctamente'
      });
      setIsOpen(true);
      navigate('/');
    } catch (err) {
      console.log(err.response);
      if (err.response && err.response.status === 422) {
        const { errors: apiErrors } = err.response.data;

        setErrors({
          name: apiErrors.name?.[0] || null,
          email: apiErrors.email?.[0] || null,
          password: apiErrors.password?.[0] || null,
          career:
            payload.career === '' ? 'Seleccione una carrera válida' : apiErrors.career?.[0] || null
        });
      }
      setResponseModal({
        description: 'Ocurrió un error al registrar el usuario'
      });
      setIsOpen(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Modal
        description={responseModal.description}
        isOpen={isOpen}
        close={() => setIsOpen(!isOpen)}
      />
      <Aside page={'home'} />
      <main>
        <section className={styles.container}>
          <div className={styles.subContainer}>
            <form className={styles.loginContainer} onSubmit={onSubmit}>
              <TextInput
                input={'input'}
                refrerence={nameRef}
                labelName={'Nombre'}
                placeholderText={'Escribe tu nombre'}
                error={errors.name}
              />
              <TextInput
                input={'input'}
                labelName={'E-mail'}
                refrerence={emailRef}
                placeholderText={'Escribe tu dirección de correo electrónico'}
                error={errors.email}
              />
              <TextInput
                input={'input'}
                refrerence={passwordRef}
                labelName={'Contraseña'}
                placeholderText={'Escribe tu contraseña'}
                error={errors.password}
              />
              <TextInput
                nameSelect={'career'}
                labelName={'Carreras'}
                refrerence={careerRef}
                error={errors.career}
              >
                <option hidden value={''}>
                  Seleccione una carrera
                </option>
                <option value={'AF'}>Analista Funcional</option>
                <option value={'DS'}>Desarrollo de Software</option>
                <option value={'ITI'}>Infraestructura de la Tecnología</option>
              </TextInput>
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