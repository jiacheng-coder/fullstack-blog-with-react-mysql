import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Write from './pages/Write'
import Home from './pages/Home'
import Single from './pages/Single'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ConfigProvider } from 'antd'
import './style.scss'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/post/:id',
        element: <Single />,
      },
      {
        path: '/write',
        element: <Write />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token，影响范围大
              colorPrimary: '#91302b',
              // borderRadius: 2,

              // 派生变量，影响范围小
              // colorBgContainer: '#f6ffed',
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </div>
    </div>
  )
}

export default App
