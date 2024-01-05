import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { useStateContext } from '../Contexts';
import axiosClient from '../Shared/Axios';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  const { user, token, setUserHeader } = useStateContext();
  const [notifications, setNotifications] = useState([]);
  const [hasPendingNotifications, setHasPendingNotifications] = useState(false);
  const [isNotificationOpen, setisNotificationOpen] = useState(false);

  const fetchNotifications = async () => {
    try {
      const { data } = await axiosClient.get('/super-admin/administration');
      setNotifications(data.data);
      setHasPendingNotifications(data.data.length > 0);
    } catch (error) {
      console.error('Error en la obtención de notificaciones:', error.message);
    }
  };

  const handleNotificationIconClick = () => {
    setisNotificationOpen(!isNotificationOpen);
  };

  useEffect(() => {
    setUserHeader(user, token);
    fetchNotifications();
  }, [user, token]);

  return sessionStorage.getItem('role') === 'DS' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerDs}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={`${styles.container2} ${styles.containerDs}`}>
          <div className={styles.photoContainer}>
            <img
              src={
                user.profile_photo || `${process.env.PUBLIC_URL}/assets/images/defaultProfile.png`
              }
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.namesTitle}>{user.name}</div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : sessionStorage.getItem('role') === 'AF' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerAf}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={`${styles.container2} ${styles.containerAf}`}>
          <div className={styles.photoContainer}>
            <img
              src={
                user.profile_photo || `${process.env.PUBLIC_URL}/assets/images/defaultProfile.png`
              }
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.namesTitle}>{user.name}</div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : sessionStorage.getItem('role') === 'ITI' ? (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.containerIti}`}>
          <h1 className={styles.title}>Escuela Superior de Comercio N°49</h1>
        </div>
        <div className={`${styles.container2} ${styles.containerIti}`}>
          <div className={styles.photoContainer}>
            <img
              src={
                user.profile_photo || `${process.env.PUBLIC_URL}/assets/images/defaultProfile.png`
              }
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.namesTitle}>{user.name}</div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : sessionStorage.getItem('role') === 'SA' ? (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${styles.titleLanding}`}>
            Escuela Superior de Comercio N°49
          </h1>
        </div>
        <div className={styles.container2}>
          <div className={`${styles.namesTitle} ${styles.titleLanding}`}>
            Bienvenido Super Admin
          </div>
          <div>
            {hasPendingNotifications ? (
              <div
                className={`${styles.notificationContainer} ${
                  isNotificationOpen ? styles.scrollableNotifications : ''
                }`}
                onClick={handleNotificationIconClick}
              >
                <FaBell className={styles.notificationIcon} />
                {isNotificationOpen ? (
                  <div className={styles.notificationPopup}>
                    <h2>Notificaciones Pendientes</h2>
                    <ul className={styles.ulNotifications}>
                      {notifications && notifications.length > 0 ? (
                        notifications.map((notification) => (
                          <Link to="/super-admin/administracion" key={notification.id}>
                            <li className={styles.liNotifications}>
                              <div className={styles.photoContainer}>
                                <img
                                  src={
                                    notification.profile_photo ||
                                    `${process.env.PUBLIC_URL}/assets/images/defaultProfile.png`
                                  }
                                  className={styles.profilePhoto}
                                />
                              </div>
                              {notification.name} - {notification.email}
                            </li>
                          </Link>
                        ))
                      ) : (
                        <li>No hay notificaciones</li>
                      )}
                    </ul>
                  </div>
                ) : null}
                <div className={styles.notificationCount}>{notifications.length}</div>
              </div>
            ) : (
              <div className={styles.notificationContainer} onClick={handleNotificationIconClick}>
                <FaBell className={styles.notificationIcon} />
                {notifications.length > 0 ? (
                  <div className={styles.notificationCount}>{notifications.length}</div>
                ) : null}
              </div>
            )}
          </div>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  ) : (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${styles.titleLanding}`}>
            Escuela Superior de Comercio N°49
          </h1>
        </div>
        <div className={styles.wallpaper}></div>
      </header>
    </>
  );
};

export default Header;
