import React from 'react';
import {
  Route as ReactDomRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';


const Route= ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard-user',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
