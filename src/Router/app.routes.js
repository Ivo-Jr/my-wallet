import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { HomeLayout } from '../Components/HomeLayout';
import Layout from '../Components/Layout';
import Dashboard from '../Pages/Dashboard';
import List from '../Pages/List';
import Signin from '../Pages/Signin';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' 
        element={
          <HomeLayout>
            <Signin />
          </HomeLayout>
        }
      />

      <Route element={<Layout />}>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/list/:type' element={<List />} />
      </Route>
    </Routes>
  )
}