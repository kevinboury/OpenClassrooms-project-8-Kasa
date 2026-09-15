import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Accommodation from './pages/Accommodation/Accommodation'
import About from './pages/About/About'
import Error from './pages/Error/Error'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/accommodation/:id" element={<Accommodation />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/error" element={<Error />} /> 
                    <Route path="*" element={<Error />} />
                </ Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
