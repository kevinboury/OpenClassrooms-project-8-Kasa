import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Layout.css'

function Layout() {
    return (
        <div className='layout'>
            <div className='layout__top-page'>
                <Header />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
