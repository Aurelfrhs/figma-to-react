import React, { useEffect, useState } from 'react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollEvent = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <header
      className={`text-black ${isScrolled ? 'bg-white' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
          <a href="#" className="text-2xl md:text-3xl font-bold text-red-700 hover:text-indigo-400 transition-colors">
            Eres
          </a>
          <a href="#" onClick={(e) => handleScroll(e, 'today')} className="hover:text-indigo-400 transition-colors text-sm sm:text-base">
            Hari ini
          </a>
          <a href="#" onClick={(e) => handleScroll(e, 'explore')} className="hover:text-indigo-400 transition-colors text-sm sm:text-base">
            Jelajahi
          </a>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 mt-4 sm:mt-0">
          <a href="#" onClick={(e) => handleScroll(e, 'about')} className="hover:text-indigo-400 transition-colors text-sm sm:text-base">
            Tentang
          </a>
          <a href="#" onClick={(e) => handleScroll(e, 'business')} className="hover:text-indigo-400 transition-colors text-sm sm:text-base">
            Bisnis
          </a>
          <a href="#" onClick={(e) => handleScroll(e, 'press')} className="hover:text-indigo-400 transition-colors text-sm sm:text-base">
            Pers
          </a>
          <button className="bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all">
            Sign In
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-all">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;