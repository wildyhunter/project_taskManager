import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.jsx'
import TaskPage from './pages/TaskPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
