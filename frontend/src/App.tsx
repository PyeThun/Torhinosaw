import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CustomerRegister from './pages/customerregister';
import HomePage from './pages/homepage';
import ReviewPage from './pages/profile/review';
import Admin from './pages/admin';
import Employee from './pages/admin/employee';
import Product from './pages/admin/product';
import Order from './pages/admin/order';

import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/register' Component={CustomerRegister}/>
        <Route path='/home' Component={HomePage}/>
        <Route path='/review' Component={ReviewPage}/>
        <Route path='/admin' Component={Admin}/>
        <Route path='/admin/employee' Component={Employee}/>
        <Route path='/admin/product' Component={Product}/>
        <Route path='/admin/order' Component={Order}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
