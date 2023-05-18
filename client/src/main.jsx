import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Single from './pages/Single'
import Write from './pages/Write'
// components
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <Single/>
      },
      {
        path: '/write',
        element: <Write/>
      }
    ]
  },
  {
    path: "/test",
    element: <div>This is test!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
