import React from 'react';

export const SearchIde = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-full bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 p-6 sm:p-8 md:p-10">
      <div className="bg-white p-6 rounded-lg flex items-center justify-center mb-8 md:mb-0 md:mr-8 shadow-xl transform hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-in-out w-full sm:w-80 md:w-96">
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full flex items-center justify-center shadow-lg">
          <i className="fas fa-search text-white mr-3 text-2xl transform hover:rotate-180 transition-transform duration-500 ease-in-out"></i>
          <span className="text-white text-lg font-semibold">Resep masakan ayam mudah</span>
        </div>
      </div>
      <div className="text-center max-w-lg mx-auto md:max-w-md w-full sm:w-96">
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-8 sm:mb-10 transform hover:scale-110 transition-all duration-300 ease-in-out">
          Cari ide
        </h1>
        <p className="text-white text-base sm:text-lg mb-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
          Apa yang ingin anda coba berikutnya? Pikirkan sesuatu yang anda sukai—Seperti “resep masakan ayam mudah”—dan lihat apa yang anda temukan.
        </p>
        <button className="bg-red-600 text-white px-8 py-4 rounded-full text-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl">
          Jelajahi
        </button>
      </div>
    </div>
  );
};

export default SearchIde;