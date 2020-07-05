import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import TypeRegistration from '../pages/TypeRegistration';

import SignUpClient from '../pages/SignUpClient';
import SignUpCompany from '../pages/SignUpCompany';

import HomeClient from '../pages/HomeClient';
import HomeCompany from '../pages/HomeCompany';

import Products from '../pages/Products';
import AddProduct from '../pages/AddProduct';

import ShoppingCart from '../pages/ShoppingCart';

import Deposits from '../pages/Deposits';

const Routes = () => {
  return (
    <Switch>
      {/* ADICIONAR isPrivate nas rotas privadas
      exemplo:
      <Route path="/home-client" component={HomeClient} isPrivate /> */}

      {/* <Route path="/" exact component={SignIn} /> */}

      <Route path="/" exact component={SignIn} />

      <Route path="/signup-client" component={SignUpClient} />
      <Route path="/signup-company" component={SignUpCompany} />
      <Route path="/type-registration" component={TypeRegistration} />

      <Route path="/home-client" component={HomeClient} isPrivate />

      <Route path="/home-company" component={HomeCompany} isPrivate />

      <Route path="/products" component={Products} isPrivate />

      <Route path="/add-product" component={AddProduct} isPrivate />

      <Route path="/shopping-cart" component={ShoppingCart} isPrivate />

      <Route path="/deposits" component={Deposits} isPrivate />

    </Switch>
  );
};

export default Routes;
