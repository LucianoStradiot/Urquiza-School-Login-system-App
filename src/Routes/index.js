import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Components/Home';

const RoutesLanding = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default RoutesLanding;
