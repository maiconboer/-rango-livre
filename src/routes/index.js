import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import TypeRegistration from '../pages/TypeRegistration';

import SignUpClient from '../pages/SignUpClient';
import SignUpCompany from '../pages/SignUpCompany';

import HomeClient from '../pages/HomeClient';
import HomeCompany from '../pages/HomeCompany';

import Details from '../pages/Details';
import ShoppingCart from '../pages/ShoppingCart';


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

      <Route path="/home-client" component={HomeClient}
      /*isPrivate */ />

      <Route path="/home-company" component={HomeCompany} /*isPrivate */ />

      <Route path="/details" component={Details} /*isPrivate */ />

      <Route path="/shopping-cart" component={ShoppingCart} /*isPrivate */ />
    </Switch>
  );
};

export default Routes;
