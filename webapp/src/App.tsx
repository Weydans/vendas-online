import type { Router } from '@remix-run/router';
import type { RouteObject } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Dashboard</div>,
  },
];

const router: Router = createBrowserRouter([...mainRoutes, ...loginRoutes]);

function App() {
  const { contextHolder } = useNotification();

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
