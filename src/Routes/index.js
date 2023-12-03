import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';
import Login from '../Views/LandingView/Login';
import Carreras from '../Views/LandingView/Carreras';
import Inscripciones from '../Views/LandingView/Inscripciones';
import SuperAdmin from '../Views/SuperAdminView/SuperAdmin';
import AlumnoProfile from '../Views/AlumnoView/Profile';
import InscripcionesAlumno from '../Views/AlumnoView/InscripcionesAlumno';
import Materias from '../Views/AlumnoView/Materias';
import Error404 from '../Views/Error404';
import LandingView from '../Views/LandingView';
import AlumnoView from '../Views/AlumnoView';
import SuperAdminView from '../Views/SuperAdminView';
import SignUp from '../Views/LandingView/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingView />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/carreras',
        element: <Carreras />
      },
      {
        path: '/inscripciones',
        element: <Inscripciones />
      }
    ]
  },
  {
    path: '/',
    element: <AlumnoView />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/alumno/profile',
        element: <AlumnoProfile />
      },
      {
        path: '/alumno/materias',
        element: <Materias />
      },
      {
        path: '/alumno/inscripciones',
        element: <InscripcionesAlumno />
      }
    ]
  },
  {
    path: '/',
    element: <SuperAdminView />,
    children: [
      {
        path: '/super-admin',
        element: <SuperAdmin />
      }
    ]
  },
  {
    path: '*',
    element: <Error404 />
  }
]);

export default router;
