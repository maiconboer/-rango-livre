import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@RangoLivre:token');
    const user = localStorage.getItem('@RangoLivre:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if(token) {
      localStorage.setItem('@RangoLivre:token', token);
      localStorage.setItem('@RangoLivre:user', JSON.stringify(user));

      setData({ token, user });
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@RangoLivre:token');
    localStorage.removeItem('@RangoLivre:user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
