import { ROUTES } from '../constants';
import { IRoutes } from '../models';
import React, { lazy } from 'react';

export const routes: IRoutes[] = [
  {
    path: ROUTES.HOME,
    name: 'Trang chủ',
    component: lazy(() => import('../pages/Home')),
    exact: true,
    isLogin: true,
  },
  {
    path: ROUTES.LOGIN,
    name: 'Đăng nhập',
    component: lazy(() => import('../pages/Login')),
    exact: true,
    isLogin: false,
  },
];
