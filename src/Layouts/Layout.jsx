import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = () => {
  console.log(import.meta.env.VITE_API_URL)
  return (
    <>
      <Nav />
      <div className='min-h-[calc(100vh-117px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
