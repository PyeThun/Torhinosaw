import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CustomerRegister from './pages/customerregister';
import HomePage from './pages/homepage';
import ReviewPage from './pages/profile/review';
import './App.css';
import ProductAdd from './pages/employee/manageproduct/add/product';
import Employee from './pages/employee';
import Updatestatus from './pages/employee/updatestatus/ubdate';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/register' Component={CustomerRegister}/>
        <Route path='/home' Component={HomePage}/>
        <Route path='/review' Component={ReviewPage}/>
        <Route path='/employee' Component={Employee}/>
        <Route path='/productadd' Component={ProductAdd}/>
        <Route path='/updatestatus' Component={Updatestatus}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
