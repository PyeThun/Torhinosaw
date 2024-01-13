import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CustomerRegister from './pages/customerregister';
import HomePage from './pages/homepage';
import ReviewPage from './pages/profile/review';
import './App.css';
import ProductAdd from './pages/employee/manageproduct/add/product';
import Employee from './pages/employee';
import Updatestatus from './pages/employee/updatestatus/ubdate';
import Manageproduct from './pages/employee/manageproduct/manageproduct';
import Buying from './pages/buying/buying';
import Home from './pages/shop/home';
import ManageOder from './pages/employee/updatestatus/odermange';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/register' Component={CustomerRegister}/>
        <Route path='/home' Component={HomePage}/>
        <Route path='/review' Component={ReviewPage}/>
        <Route path='/employee' Component={Employee}/>

        {/* ***** Aum ******* */}
        <Route path='/productadd' Component={ProductAdd}/>
        <Route path='/updatestatus' Component={Updatestatus}/>
        <Route path='/product_management' Component={Manageproduct}/>
        <Route path='/Order_management' Component={ManageOder}/>
        <Route path='/buying' Component={Buying}/>
        <Route path='/shopping' Component={Home}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
