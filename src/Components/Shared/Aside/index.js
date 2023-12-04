import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './aside.module.css';
import { useStateContext } from '../../Contexts';

const Aside = ({ page }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useStateContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    navigate('/');
  };
  useEffect(() => {
    const currentPath = location.pathname === '/' ? 'home' : location.pathname.substring(1);
    setActiveButton(currentPath);
  }, []);

  return page === 'home' ? (
    sessionStorage.getItem('role') === 'DS' && token ? (
      <>
        <aside className={`${styles.aside} ${styles.asideDs}`}>
          <div className={styles.asideSubContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/logoDs.png`}
              alt="logo-DS"
              className={styles.logo}
            />
            <div className={styles.title}>Escuela Superior de Comercio N°49</div>
            <div className={styles.menuButton} onClick={toggleMenu}>
              <div className={`${isOpen ? styles.x1 : styles.bar}`}></div>
              <div className={`${isOpen ? styles.x2 : styles.bar} `}></div>
              <div className={`${isOpen ? '' : styles.bar} `}></div>
            </div>
            <nav className={`${isOpen ? styles.activeMenu : styles.menu}`}>
              <ul className={styles.rutes}>
                <li>
                  <Link
                    to="/alumno/profile"
                    className={`${
                      activeButton === 'alumno/profile' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`${activeButton === 'home' ? styles.activeBtn : styles.btn}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumno/materias"
                    className={`${
                      activeButton === 'alumno/materias' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Materias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumno/inscripciones"
                    className={`${
                      activeButton === 'alumno/inscripciones' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Inscripciones
                  </Link>
                </li>
              </ul>
              <div>
                <li>
                  <a
                    className={`${
                      activeButton === 'logout'
                        ? styles.activeBtn
                        : `${styles.btn} ${styles.btnLanding}`
                    }`}
                    onClick={onLogout}
                  >
                    Logout
                  </a>
                </li>
              </div>
            </nav>
          </div>
        </aside>
      </>
    ) : sessionStorage.getItem('role') === 'AF' && token ? (
      <>
        <aside className={`${styles.aside} ${styles.asideAf}`}>
          <div className={styles.asideSubContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/logoAf.png`}
              alt="logo-AF"
              className={styles.logo}
            />
            <div className={styles.title}>Escuela Superior de Comercio N°49</div>
            <div className={styles.menuButton} onClick={toggleMenu}>
              <div className={`${isOpen ? styles.x1 : styles.bar}`}></div>
              <div className={`${isOpen ? styles.x2 : styles.bar} `}></div>
              <div className={`${isOpen ? '' : styles.bar} `}></div>
            </div>
            <nav className={`${isOpen ? styles.activeMenu : styles.menu}`}>
              <ul className={styles.rutes}>
                <li>
                  <Link
                    to="/alumno/profile"
                    className={`${
                      activeButton === 'alumno/profile' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`${activeButton === 'home' ? styles.activeBtn : styles.btn}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumno/materias"
                    className={`${
                      activeButton === 'alumno/materias' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Materias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumno/inscripciones"
                    className={`${
                      activeButton === 'alumno/inscripciones' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Inscripciones
                  </Link>
                </li>
              </ul>
              <div>
                <li>
                  <a
                    className={`${
                      activeButton === 'logout'
                        ? styles.activeBtn
                        : `${styles.btn} ${styles.btnLanding}`
                    }`}
                    onClick={onLogout}
                  >
                    Logout
                  </a>
                </li>
              </div>
            </nav>
          </div>
        </aside>
      </>
    ) : sessionStorage.getItem('role') === 'ITI' && token ? (
      <>
        <aside className={`${styles.aside} ${styles.asideIti}`}>
          <div className={styles.asideSubContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/logoIti.png`}
              alt="logo-ITI"
              className={styles.logo}
            />
            <div className={styles.title}>Escuela Superior de Comercio N°49</div>
            <div className={styles.menuButton} onClick={toggleMenu}>
              <div className={`${isOpen ? styles.x1 : styles.bar}`}></div>
              <div className={`${isOpen ? styles.x2 : styles.bar} `}></div>
              <div className={`${isOpen ? '' : styles.bar} `}></div>
            </div>
            <nav className={`${isOpen ? styles.activeMenu : styles.menu}`}>
              <ul className={styles.rutes}>
                <li>
                  <Link
                    to="/alumno/profile"
                    className={`${
                      activeButton === 'alumno/profile' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`${activeButton === 'home' ? styles.activeBtn : styles.btn}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumno/materias"
                    className={`${
                      activeButton === 'alumno/materias' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Materias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/alumno/inscripciones"
                    className={`${
                      activeButton === 'alumno/inscripciones' ? styles.activeBtn : styles.btn
                    }`}
                  >
                    Inscripciones
                  </Link>
                </li>
              </ul>
              <div className={styles.logout}>
                <li>
                  <a
                    className={`${
                      activeButton === 'logout'
                        ? styles.activeBtn
                        : `${styles.btn} ${styles.btnLanding}`
                    }`}
                    onClick={onLogout}
                  >
                    Logout
                  </a>
                </li>
              </div>
            </nav>
          </div>
        </aside>
      </>
    ) : (
      <>
        <aside className={styles.aside}>
          <div className={styles.asideSubContainer}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/logoLanding.png`}
              alt="logo-Landing"
              className={styles.logo}
            />
            <div className={`${styles.title} ${styles.titleLanding}`}>
              Escuela Superior de Comercio N°49
            </div>
            <div className={styles.menuButton} onClick={toggleMenu}>
              <div
                className={`${
                  isOpen ? `${styles.x1} ${styles.x1Landing}` : `${styles.bar} ${styles.barLanding}`
                }`}
              ></div>
              <div
                className={`${
                  isOpen ? `${styles.x2} ${styles.x2Landing}` : `${styles.bar} ${styles.barLanding}`
                } `}
              ></div>
              <div className={`${isOpen ? '' : `${styles.bar} ${styles.barLanding}`} `}></div>
            </div>
            {sessionStorage.getItem('role') === 'SUPER_ADMIN' && token ? (
              <>
                <nav
                  className={`${
                    isOpen ? `${styles.activeMenu} ${styles.activeMenuSAHome}` : styles.menu
                  }`}
                >
                  <ul className={styles.rutes}>
                    <li>
                      <Link
                        to="/super-admin"
                        className={`${
                          activeButton === 'super-admin'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Administración
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${
                          activeButton === 'home'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/carreras"
                        className={`${
                          activeButton === 'carreras'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Carreras
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/inscripciones"
                        className={`${
                          activeButton === 'inscripciones'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Inscripciones
                      </Link>
                    </li>
                  </ul>
                  <div className={styles.logout}>
                    <li>
                      <a
                        className={`${
                          activeButton === 'logout'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                        onClick={onLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </div>
                </nav>
              </>
            ) : (
              <>
                <nav className={`${isOpen ? styles.activeMenu : styles.menu}`}>
                  <ul className={styles.rutes}>
                    <li>
                      <Link
                        to="/login"
                        className={`${
                          activeButton === 'login'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className={`${
                          activeButton === 'home'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/carreras"
                        className={`${
                          activeButton === 'carreras'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Carreras
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/inscripciones"
                        className={`${
                          activeButton === 'inscripciones'
                            ? styles.activeBtn
                            : `${styles.btn} ${styles.btnLanding}`
                        }`}
                      >
                        Inscripciones
                      </Link>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </div>
        </aside>
      </>
    )
  ) : page === 'super-admin' && token ? (
    <>
      <aside className={styles.aside}>
        <div className={styles.asideSubContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logoLanding.png`}
            alt="logo-Landing"
            className={styles.logo}
          />
          <div className={`${styles.title} ${styles.titleLanding}`}>
            Escuela Superior de Comercio N°49
          </div>
          <div className={styles.menuButton} onClick={toggleMenu}>
            <div
              className={`${
                isOpen ? `${styles.x1} ${styles.x1Landing}` : `${styles.bar} ${styles.barLanding}`
              }`}
            ></div>
            <div
              className={`${
                isOpen ? `${styles.x2} ${styles.x2Landing}` : `${styles.bar} ${styles.barLanding}`
              } `}
            ></div>
            <div className={`${isOpen ? '' : `${styles.bar} ${styles.barLanding}`} `}></div>
          </div>
          <nav
            className={`${isOpen ? `${styles.activeMenu} ${styles.activeMenuSA}` : styles.menu}`}
          >
            <ul className={styles.ruteSAdmin}>
              <li>
                <Link to="/" className={`${styles.btn} ${styles.btnLanding}`}>
                  Home
                </Link>
              </li>
              <li>
                <a className={`${styles.btn} ${styles.btnLanding}`} onClick={onLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  ) : null;
};

export default Aside;
