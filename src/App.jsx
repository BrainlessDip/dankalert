import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Utility from './components/Utility';
import Stats from './components/Stats';
import Footer from './components/Footer';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

const MainContent = () => (
  <>
    <Navbar />
    <Hero />
    <Features />
    <Utility />
    <Stats />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;