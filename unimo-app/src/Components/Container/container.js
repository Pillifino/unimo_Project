import React from 'react';
// Components
// Routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from '../../Pages/Home/home';
import Signup from '../../Pages/Signup/singup';
import Login from '../../Pages/Login/login';
import Shop from '../../Pages/myShop/shop';
import Bidding from '../../Pages/Bidding/bidding';
import BuyNow from '../../Pages/buyUnimo/buyNow';
import BuyUnimo from '../../Pages/buyUnimo/buyUnimo';
import SellUnimo from '../../Pages/sellUnimo/sellUnimo';
import Collections from '../../Pages/myCollections/collections';
import CreateUnimo from '../../Pages/createUnimo/createUnimo';
import Settings from '../../Pages/Settings/settings';

function Container() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/bidding" element={<Bidding />}/>
          <Route path="/buynow" element={<BuyNow />}/>
          <Route path="/buyunimo" element={<BuyUnimo />}/>
          <Route path="/sellunimo" element={<SellUnimo />}/>
          <Route path="/collections" element={<Collections />}/>
          <Route path="/createunimo" element={<CreateUnimo />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default Container;
