import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Location from './pages/Accomodation/Accomodation'
import About from './pages/About/About'
import Error from './pages/Error/Error'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/location/:id" element={<Location />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </ Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
