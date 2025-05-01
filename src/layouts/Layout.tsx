import { Outlet } from 'react-router-dom'
import Navigation from '@layouts/Navigation'
import Sidebar from '@layouts/Sidebar'

const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-row w-full justify-between">
        <Sidebar />
        <main className="flex-grow">
          <Outlet /> {/* Ini tempat halaman muncul */}
        </main>
      </div>
    </>
  )
}

export default Layout
