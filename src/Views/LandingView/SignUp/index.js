import React, { useRef, useState } from 'react';
import styles from './signUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../../Components/Shared/Axios';
import Aside from '../../../Components/Shared/Aside';
import TextInput from '../../../Components/Shared/TextInput';
import Button from '../../../Components/Shared/Button';
import Modal from '../../../Components/Shared/Modal';
import Spinner from '../../../Components/Shared/Spinner';
import { useStateContext, useModalContext } from '../../../Components/Contexts';

const SignUp = () => {
  const { openModal } = useModalContext();
  const { setStudent } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const careerRef = useRef();

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
    setIsLoading(true);
    setErrors({});
    try {
      const { data } = await axiosClient.post('/signup', payload);
      setStudent(data.student);
      openModal({
        description: 'Usuario registrado correctamente',
        chooseModal: false
      });
      navigate('/');
    } catch (err) {
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
      openModal({
        description: 'Se produjo un error en el registro',
        chooseModal: false
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Aside page={'home'} />
      <Modal />
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
