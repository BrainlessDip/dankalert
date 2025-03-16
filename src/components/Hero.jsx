import { useEffect } from 'react';
import { animate } from 'motion';

const Hero = () => {
  useEffect(() => {
    animate('#hero-title', { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 });
    animate('#hero-description', { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.2 });
    animate('#hero-button', { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: 0.4 });
    animate('#hero-logo', { opacity: [0, 1], scale: [0, 1], rotate: [180, 0] }, { duration: 1, delay: 0.5, easing: [0, 1, 0.6, 1] });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:justify-between">
        <div id="hero-logo" className="w-48 h-48 md:w-64 md:h-64 relative mb-8 md:mb-0 md:ml-8 md:order-last">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Dank Alert Logo" className="w-full h-full object-cover rounded-full shadow-2xl" />
        </div>
        <div className="text-center md:text-left max-w-2xl">
          <h1 id="hero-title" className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            What is Dank Alert?
          </h1>
          <p id="hero-description" className="text-xl md:text-2xl text-gray-300 mb-8">
            Dank Alert is an advanced assistant bot designed to provide notifications regarding global boosts, scratch rewards, and fishing events directly to your server.
          </p>
          <button
            id="hero-button"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1208952109547003994', '_blank')}
          >
            Invite Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;