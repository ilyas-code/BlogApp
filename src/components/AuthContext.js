import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    const storedIsAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    if (storedUsername && storedIsAuthenticated) {
      setUsername(storedUsername);
      setIsAuthenticated(storedIsAuthenticated);
    }
  }, []);

  const signin = (username) => {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('isAuthenticated', true);
    setUsername(username);
    setIsAuthenticated(true);
  };

  const signout = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isAuthenticated');
    setUsername(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };