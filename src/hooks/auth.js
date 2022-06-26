import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

import { useTheme } from './theme';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const { theme } = useTheme();
  const [logged, setLogged] = useState(() => {
    const user = sessionStorage.getItem('@my-wallet:user');

    if(user) {
      return user
    }
  });

  const signIn = (email, password) => {
    if(email === 'user@gmail.com' && password === '123'){
      sessionStorage.setItem('@my-wallet:user', true);
      setLogged(true);
      toast.dismiss();
    }else {
      notify();
      setLogged('invalid');
    }
  }

  const notify = () => toast.error('Password or user ivalid! Please sigin with: email:"user@gmail.com", password: "123"', {
    theme: theme.title === 'dark' ? 'dark' : 'colored',
    position: toast.POSITION.BOTTOM_RIGHT
  });

  const signOut = () => {
    sessionStorage.removeItem('@my-wallet:user');
    sessionStorage.removeItem('@my-wallet:sideBarOpen');
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