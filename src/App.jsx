

// import { Link, Navigate, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import About from './components/about/About'
// import Services from './components/services/Services'
// import Contact from './components/contact/Contact'
// import Navbar from './components/layout/NavBar'
// import Footer from './components/layout/Footer'
// import NotFound from './components/NotFound'

import Footer from "./components/Footer"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Services from "./pages/Services"
import { Route, Routes } from "react-router-dom"
import CaseStudies from "./pages/CaseStudies"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {


  return (
    <div className="bg-background font-body text-on-background antialiased overflow-hidden ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>




  )
}

export default App
