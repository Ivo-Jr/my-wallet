import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import App from './app.routes';
// import Auth from './auth.routes';

// import { useAuth } from '../hooks/auth';
import { IndexRoutes } from './index.routes';

export default function Routes() {
  // const { logged } = useAuth();

  return(
    //   { logged ? <App /> : <Auth /> }
    <Router>
      <IndexRoutes />
    </Router>
  )
}