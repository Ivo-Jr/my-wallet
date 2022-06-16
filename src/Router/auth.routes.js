import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from '../Pages/Signin';

const AuthRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </Router>
  );
}

export default AuthRoutes;  