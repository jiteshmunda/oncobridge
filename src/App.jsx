
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Loader from './components/Loader'; 

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
import Faq from './pages/Faq';
import Partners from './pages/Partners';
import Patients from './pages/Patients';
import NotFound from './pages/NotFound';
import Myths from './pages/Myths';
import SecondOpinion from './pages/SecondOpinion';
import TestimonialSlider from './pages/TestimonialSlider';
import NewsLetter from './pages/NewsLetter';
import Videos from './pages/Videos';
import PatientLogin from './pages/PatientLogin';
import PatientDashboard from './pages/PatientDashboard';


function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <div style={{ display: loading ? 'none' : 'block' }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimers" element={<Disclaimers />} />
            <Route path="/hospital" element={<Hospitals />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/productdesc" element={<ProductDesc />} />
            <Route path="/secondopinion" element={<SecondOpinion />} />
            <Route path="/testimonial" element={<TestimonialSlider />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/newsletter" element={<NewsLetter />} />
            <Route path="/myths" element={<Myths />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="/blogdetail" element={<BlogDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
