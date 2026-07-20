import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

import TimerPage from './components/TimerPage/TimerPage';
import TaskCreator from './components/TaskCreator/TaskCreator';
import Stats from './components/TaskCreator/Stats/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TimerPage />
      },
      {
        path: 'add-task',
        element: <TaskCreator />
      },
      {
        path: 'stats',
        element: <Stats />
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);