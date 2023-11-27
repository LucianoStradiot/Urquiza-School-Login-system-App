import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Components/Home';
import Login from '../Views/Login';
import Carreras from '../Views/Carreras';
import Inscripciones from '../Views/Inscripciones';

const RoutesLanding = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carreras" element={<Carreras />} />
        <Route path="/inscripciones" element={<Inscripciones />} />
      </Routes>
    </>
  );
};

export default RoutesLanding;
