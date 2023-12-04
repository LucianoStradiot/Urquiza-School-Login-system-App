import { useContext, useState, createContext } from 'react';

const StateContext = createContext({
  user: null,
  token: null,
  role: null,
  setUser: () => {},
  setToken: () => {},
  setRole: () => {}
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
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
      sessionStorage.removeItemItem('role');
    }
  };

  return (
    <StateContext.Provider value={{ user, token, role, setUser, setTokenAndRole }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
