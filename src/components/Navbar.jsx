import { useState, useEffect } from 'react';
import { animate } from 'motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center">
      <div className={`max-w-2xl w-full transition-all duration-300 ${isScrolled ? 'bg-gray-900/50 backdrop-blur-sm shadow-lg rounded-3xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => scrollToSection('hero')}>
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Dank Alert Logo" className="h-8 w-8 rounded-full" />
              <span className="text-2xl font-bold text-white">Dank Alert</span>
            </div>
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('stats')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Stats
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 w-[120px]"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;