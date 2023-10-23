import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layouts/Layout.jsx'
import Memories from './pages/Memories'
import Home from './pages/Home'
import AddMemory from './pages/AddMemory'
import { Toaster } from 'react-hot-toast'
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
        path: '/memories',
        element: <Memories />,
      },
      {
        path: '/add-memory',
        element: <AddMemory />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
)
