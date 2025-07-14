import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Terms from './pages/Terms';
import Disclaimers from './pages/Disclaimers';
import Hospitals from './pages/Hospitals';
import Insurance from './pages/Insurance';
import BlogSection from './pages/BlogSection';
import ProductDesc from './pages/ProductDesc';
import BlogDetail from './pages/BlogDetail';
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hospital" element={<Hospitals />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/productdesc" element={<ProductDesc />} />         
          <Route path="/blog" element={<BlogSection />} />
            <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimers" element={<Disclaimers />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
