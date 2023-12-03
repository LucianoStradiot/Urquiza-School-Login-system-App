import { useContext, useState, createContext } from 'react';

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {}
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Luciano'
  });
  const [token, _setToken] = useState(null);

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      sessionStorage.setItem('ACCESS_TOKEN', token);
    } else {
      sessionStorage.removeItem('ACCESS_TOKEN');
    }
  };

  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
