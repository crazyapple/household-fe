// PrivateRoute.tsx in v6
import React from 'react';
import { ROUTES } from '../constants';
import { useAppSelector } from '../hooks';
import { selectAuthenticated, selectLoading } from '../store/reducers';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();

  const isAuthenticated = useAppSelector(selectAuthenticated);
  const loading = useAppSelector(selectLoading);

  if (loading) {
    return <p>Checking authenticaton..</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
