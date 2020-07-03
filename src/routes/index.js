import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import TypeRegistration from '../pages/TypeRegistration';

import SignUpUser from '../pages/SignUpUser';
import SignUpCompany from '../pages/SignUpCompany';

import DashboardUser from '../pages/DashboardUser';
import DashboardCompany from '../pages/DashboardCompany';


import Teste from '../pages/Teste';

const Routes= () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={SignIn} /> */}


      {/* <Route path="/" exact component={DashboardUser} /> */}
      <Route path="/" exact component={DashboardCompany} />
      <Route path="/signup-user" component={SignUpUser} />
      <Route path="/signup-company" component={SignUpCompany} />
      <Route path="/type-registration" component={TypeRegistration} />

      <Route path="/dashboard-user" component={DashboardUser} isPrivate />
      <Route path="/dashboard-compány" component={DashboardCompany} isPrivate />

      <Route path="/teste" component={Teste} isPrivate />
    </Switch>
  );
};

export default Routes;
