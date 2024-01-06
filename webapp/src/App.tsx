import type { Router } from '@remix-run/router';
import type { RouteObject } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Dashboard</div>,
  },
];

const router: Router = createBrowserRouter([...mainRoutes, ...loginRoutes]);

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
