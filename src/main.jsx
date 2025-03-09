import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from './components/pages/Start.jsx';
import IbmClaculator from './components/pages/IbmClaculator.jsx';
import Shop from './components/pages/Shop.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './components/context/CartContext';
import Exercises from './components/pages/FitnessTracker.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: '/start',
    element: <Start />,
  },
  {
    path: 'BMI_Calculator',
    element: <IbmClaculator />,
  },
  {
    path: '/Home',
    element: <App />,
  },
  {
    path: '/shop',
    element: (
      <CartProvider>
        <Shop />
      </CartProvider>
    ),
  },
  {
    path: '/carts',
    element: (
      <CartProvider>
        <Cart />
      </CartProvider>
    ),
  },
  {
    path:'/exercises',
    element:<Exercises/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
