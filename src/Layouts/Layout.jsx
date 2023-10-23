import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = () => {
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
