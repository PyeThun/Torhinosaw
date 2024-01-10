import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import CustomerRegister from './pages/customerregister';
import HomePage from './pages/homepage';
import ReviewPage from './pages/profile/review';
import Admin from './pages/admin';
import EditProfilePage from './pages/profile/EditProfilePage/EditProfilePage';
import CartPage from './pages/CartPage/CartPage';
import WishlistPage from './pages/profile/WishlistPage/WishlistPage';
import PurchasePage from './pages/profile/PurchasePage/PurchasePage';
import LoginPage from './pages/LoginPage/LoginPage';
import PaymentPage from './pages/PaymentPage/PaymentPage'
import './App.css';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route path='/register' Component={CustomerRegister}/>
        <Route path='/' Component={HomePage}/>
        <Route path='/review' Component={ReviewPage}/>
        <Route path='/admin' Component={Admin}/>
        <Route path="/EditProfile"      Component={EditProfilePage}/>
        <Route path="/Cart"      Component={CartPage} />
        <Route path="/Wishlist"      Component={WishlistPage} />
        <Route path="/Purchase"      Component={PurchasePage} />
        <Route path="/Login"      Component={LoginPage} />
        <Route path="/Payment"      Component={PaymentPage} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
