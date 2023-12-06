import React, { useRef, useState } from 'react';
import styles from './signUpSuperAdmin.module.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../Components/Shared/Axios';
import Aside from '../../../../Components/Shared/Aside';
import TextInput from '../../../../Components/Shared/TextInput';
import Button from '../../../../Components/Shared/Button';
import Modal from '../../../../Components/Shared/Modal';
import Spinner from '../../../../Components/Shared/Spinner';
import { useStateContext, useModalContext } from '../../../../Components/Contexts';

const SignUp = () => {
  const { openModal } = useModalContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const careerRef = useRef();

  const { setSuperAdmin, setTokenAndRole } = useStateContext();
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    career: null
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      career: careerRef.current.value
    };
    console.log(payload);
    setIsLoading(true);
    try {
      const { data } = await axios.post('/signup/super-admin', payload);
      setSuperAdmin(data.superAdmin);
      setTokenAndRole(data.token, data.superAdmin.career);
      openModal({
        description: 'Super Admin registrado correctamente',
        chooseModal: false
      });
      navigate('/super-admin/administracion');
    } catch (err) {
      console.log(err.response);
      if (err.response && err.response.status === 422) {
        const { errors: apiErrors } = err.response.data;

        setErrors({
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
                <option value={'SA'}>Super admin</option>
              </TextInput>
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
