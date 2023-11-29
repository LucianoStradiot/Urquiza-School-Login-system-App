import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Components/Home';
import Login from '../Views/Login';
import Carreras from '../Views/Carreras';
import Inscripciones from '../Views/Inscripciones';
import SuperAdmin from '../Views/SuperAdmin';
import AlumnoProfile from '../Views/Alumno/Profile';
import InscripcionesAlumno from '../Views/Alumno/InscripcionesAlumno';
import Materias from '../Views/Alumno/Materias';

const RoutesLanding = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carreras" element={<Carreras />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
        <Route path="/super-admin" element={<SuperAdmin />} />
        <Route path="/alumno/profile" element={<AlumnoProfile />} />
        <Route path="/alumno/materias" element={<Materias />} />
        <Route path="/alumno/inscripciones" element={<InscripcionesAlumno />} />
      </Routes>
    </>
  );
};

export default RoutesLanding;
