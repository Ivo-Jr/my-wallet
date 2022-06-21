import React from 'react';

import { Routes, Route } from 'react-router-dom';

import SignIn from '../Pages/Signin';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>}/>
    </Routes>
  );
}

export default AuthRoutes;  