import React, { useRef, useState } from 'react';
import styles from './signUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../../Components/Shared/Axios';
import Aside from '../../../Components/Shared/Aside';
import TextInput from '../../../Components/Shared/TextInput';
import Button from '../../../Components/Shared/Button';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Modal from '../../../Components/Shared/Modal';
import Spinner from '../../../Components/Shared/Spinner';
import { useStateContext, useModalContext } from '../../../Components/Contexts';

const SignUp = () => {
  const { openModal } = useModalContext();
  const { setUser } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const careerRef = useRef();
  const dniRef = useRef();
  const [errors, setErrors] = useState({
    name: null,
    dni: null,
    email: null,
    password: null,
    career: null
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      dni: dniRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      career: careerRef.current.value
    };
    setIsLoading(true);
    setErrors({});
    try {
      const { data } = await axiosClient.post('/signup', payload);
      setUser(data.user);
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
          dni: apiErrors.dni?.[0] || null,
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
              <div className={styles.loginSubContainer}>
                <TextInput
                  input={'input'}
                  refrerence={nameRef}
                  labelName={'Nombre'}
                  placeholderText={'Escribe tu nombre'}
                  error={errors.name}
                />
                <TextInput
                  input={'input'}
                  refrerence={dniRef}
                  labelName={'DNI'}
                  placeholderText={'Escribe tu DNI'}
                  error={errors.dni}
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
                  <option value={'ITI'}>Tecnologías de la Información</option>
                </TextInput>
              </div>
              <div className={styles.loginSubContainer}>
                <TextInput
                  input={'input'}
                  labelName={'E-mail'}
                  refrerence={emailRef}
                  placeholderText={'Escribe tu dirección de correo electrónico'}
                  error={errors.email}
                />
                <div className={styles.passwordContainer}>
                  <TextInput
                    labelName={'Contraseña'}
                    placeholderText={'Escribe tu contraseña'}
                    input={'input'}
                    refrerence={passwordRef}
                    error={errors.password}
                    inputType={showPassword ? 'text' : 'password'}
                  />
                  {showPassword ? (
                    <FaEye
                      className={styles.showPasswordIcon}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <FaEyeSlash
                      className={styles.showPasswordIcon}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
                <Link to="/recoverPassword" className={styles.password}>
                  <p>Olvidaste tu contraseña?</p>
                </Link>
                <div className={styles.btnContainer}>
                  <Button type="submit" text="Enviar" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
