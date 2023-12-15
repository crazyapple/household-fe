import React from 'react';
import { Logout } from '../../components';
import { Fragment, ReactElement, ReactNode } from 'react';

function AuthLayout({ children }: { children: JSX.Element | ReactNode | ReactElement }) {
  return (
    <Fragment>

      {children}

      <Logout />
    </Fragment>
  );
}

export default AuthLayout;
