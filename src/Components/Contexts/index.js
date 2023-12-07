import { useContext, useState, createContext } from 'react';

const StateContext = createContext({
  student: null,
  superAdmin: null,
  saveToken: { token: null },
  role: null,
  setStudent: () => {},
  setSuperAdmin: () => {},
  setTokenAndRole: () => {},
  setSaveToken: () => {}
});

export const ContextProvider = ({ children }) => {
  const [student, setStudent] = useState({});
  const [superAdmin, setSuperAdmin] = useState({});
  const [saveToken, _setSaveToken] = useState({ token: null });
  const [token, _setToken] = useState(sessionStorage.getItem('ACCESS_TOKEN'));
  const [role, setRole] = useState(sessionStorage.getItem('role'));

  const setTokenAndRole = (token, role) => {
    _setToken(token);
    setRole(role);
    if (token && role) {
      sessionStorage.setItem('ACCESS_TOKEN', token);
      sessionStorage.setItem('role', role);
    } else {
      sessionStorage.removeItem('ACCESS_TOKEN');
      sessionStorage.removeItem('role');
    }
  };

  const setSaveToken = (token) => {
    if (token) {
      _setSaveToken({ token });
    }
  };

  return (
    <StateContext.Provider
      value={{
        student,
        superAdmin,
        token,
        role,
        saveToken,
        setStudent,
        setSaveToken,
        setSuperAdmin,
        setTokenAndRole
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    description: '',
    title: '',
    confirmBtn: '',
    denyBtn: '',
    chooseModal: false,
    onClick: null
  });

  const openModal = (modalConfig) => {
    setModalState({
      isOpen: true,
      ...modalConfig
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      description: '',
      title: '',
      confirmBtn: '',
      denyBtn: '',
      chooseModal: false,
      onClick: null
    });
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
