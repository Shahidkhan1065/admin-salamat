import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoutes = ({
  component: Component,
  layout: Layout,
  path,
  exact,
}) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? (
    <Route
      path={path}
      exact={exact}
      render={(props) => (
        <Layout {...props}>
          <Component {...props}></Component>
        </Layout>
      )}
    />
  ) : (
    <Redirect to={'/'} />
  );
};

export default ProtectedRoutes;
