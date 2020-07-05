import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import SignUpClient from '../pages/SignUpClient';
import SignUpCompany from '../pages/SignUpCompany';

import HomeClient from '../pages/HomeClient';

import Products from '../pages/Products';
import AddProduct from '../pages/AddProduct';

import ShoppingCart from '../pages/ShoppingCart';

import Deposits from '../pages/Deposits';
import Transfer from '../pages/Transfer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/signup-client" component={SignUpClient} />
      <Route path="/signup-company" component={SignUpCompany} />

      <Route path="/home-client" component={HomeClient} isPrivate />

      <Route path="/products" component={Products} isPrivate />

      <Route path="/add-product" component={AddProduct} isPrivate />

      <Route path="/shopping-cart" component={ShoppingCart} isPrivate />

      <Route path="/deposits" component={Deposits} isPrivate />

      <Route path="/transfer-money" component={Transfer} isPrivate />
    </Switch>
  );
};

export default Routes;
