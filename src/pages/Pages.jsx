import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const cardData = [
  { width: 'w-40', height: 'h-60', animation: 'fade-right', delay: '100'},
  { width: 'w-40', height: 'h-48', animation: 'fade-up', delay: '200', marginTop: 'mt-12' },
  { width: 'w-40', height: 'h-56', animation: 'fade-left', delay: '300', marginTop: 'mt-8' },
  { width: 'w-40', height: 'h-40', animation: 'flip-up', delay: '400'},
  { width: 'w-40', height: 'h-56', animation: 'flip-down', delay: '500', marginTop: 'mt-8' },
  { width: 'w-40', height: 'h-48', animation: 'flip-down', delay: '500', marginTop: 'mt-12' },
  { width: 'w-40', height: 'h-60', animation: 'flip-down', delay: '500'},
];

export const Pages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-800 text-center" data-aos="fade-up">
        Dapatkan Ide
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`${card.width} ${card.height} ${card.marginTop} bg-gray-300 rounded-lg shadow-2xl transform hover:scale-110 transition-all duration-300`}
            data-aos={card.animation}
            data-aos-delay={card.delay}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Pages;