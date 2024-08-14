import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/cheap-dollar.png';
import Video from '../Videos/8581127-hd_1920_1080_30fps.mp4';

const LandingPage = () => {
  return (
    <section className='relative flex flex-col justify-center items-center h-screen overflow-hidden bg-black'>
      <video
        src={Video}
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover blur-lg'
      />
      <div className='relative flex flex-col justify-center items-center p-4 w-full h-full max-w-5xl mx-auto'>
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <img src={Logo} className="h-16 sm:h-24 mb-4 sm:mb-0" alt="Flowbite Logo" />
          <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold text-center sm:text-left'>
            Frugal Feast
          </h1>
        </div>
        <div className='text-center mb-8'>
          <h1 className='font-bold text-2xl sm:text-4xl md:text-6xl'>
            Turn Unused Ingredients into Delicious Creations!
          </h1>
        </div>
        <div className='text-center mb-8 px-4'>
          <p className='text-lg sm:text-xl'>
            Enter your available ingredients and get recipe suggestions tailored to your dietary preferences.
          </p>
          <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-3/4 mx-auto' />
          <p className='text-lg sm:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque tempore debitis, at explicabo architecto.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <a href="#_" className="flex items-center justify-center px-6 py-3 text-base leading-6 bg-fandangoPink font-bold border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:border-fandangoPink focus:outline-none transition duration-300 ease-in-out">
            Get Started
          </a>
          <Link to="./search" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 border-2 border-fandangoPink rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black transition-transform duration-300 -translate-x-full bg-fandangoPink group-hover:translate-x-0 ease-in-out">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="relative flex items-center justify-center w-full h-full text-black font-bold transition-transform duration-300 transform group-hover:translate-x-full ease-in-out">
              Find Recipes.
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
