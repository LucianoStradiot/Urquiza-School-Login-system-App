import React from 'react';
import { Outlet } from 'react-router';

const LandingView = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LandingView;
