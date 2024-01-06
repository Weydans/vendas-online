import type { RouteObject } from 'react-router';

import LoginScreen from '.';

export const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];
