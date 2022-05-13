import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../Components/Layout';
import Dashboard from '../Pages/Dashboard';
import List from '../Pages/List';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/list/:type" element={<List/>} />
        </Routes>
      </Layout>
    </Router>
  )
}
