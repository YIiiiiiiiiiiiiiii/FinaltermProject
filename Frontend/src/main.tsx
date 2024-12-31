import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import { RouterProvider, } from 'react-router/dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './view/App'
import InsertOne from './view/InsertOne'
import { StudentsProvider } from './context/StudentsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './view/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StudentsProvider>
      <RouterProvider router={router} />
    </StudentsProvider>
  </StrictMode>,
)
