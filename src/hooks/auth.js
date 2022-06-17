import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem('@my-wallet:logged');

    return !!isLogged;
  });

  const signIn = (email, password) => {
    if(email === 'ivo@gmail.com' && password === '123'){
      sessionStorage.setItem('@my-wallet:logged', true);
      setLogged(true);
    }else {
      alert('Password or user ivalid!')
    }
  }

  const signOut = () => {
    sessionStorage.removeItem('@my-wallet:logged', true);
    setLogged(false);

  }

  return (
    <AuthContext.Provider 
      value={{
        logged,
        signIn,
        signOut
      }}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { logged, signIn, signOut } = context;
  return { logged, signIn, signOut }
}