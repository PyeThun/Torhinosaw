import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import CustomerRegister from './pages/customerregister';
import HomePage from './pages/homepage';
import LoginPage from './pages/LoginPage/LoginPage';

import Profile from './pages/profile';
import ReviewPage from './pages/profile/review';
import EditProfilePage from './pages/profile/EditProfilePage/EditProfilePage';
import CartPage from './pages/CartPage/CartPage';
import WishlistPage from './pages/profile/WishlistPage/WishlistPage';

import PurchasePage from './pages/profile/PurchasePage/PurchasePage';
import PaymentPage from './pages/PaymentPage/PaymentPage'

import Admin from './pages/admin';

import './App.css';


function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/register' Component={CustomerRegister}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/review' Component={ReviewPage}/>
        <Route path='/admin' Component={Admin}/>
        <Route path="/editprofile"      Component={EditProfilePage}/>
        <Route path="/cart"      Component={CartPage} />
        <Route path="/wishlist"      Component={WishlistPage} />
        <Route path="/purchase"      Component={PurchasePage} />
        <Route path="/login"      Component={LoginPage} />
        <Route path="/payment"      Component={PaymentPage} />
      </Routes>
    </Router>
    </>
  );
}
export default App;
