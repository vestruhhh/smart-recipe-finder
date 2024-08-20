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
        className='absolute top-0 left-0 w-full h-full object-cover blur-xl'
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
          <p className='sm:text-xl md:text-lg'>
            Enter your available ingredients and get recipe suggestions tailored to your dietary preferences.
          </p>
          <hr className='h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 w-3/4 mx-auto' />
          <p className='sm:text-xl md:text-base'>
            Discover how easy it can be to create delicious meals with what you already have in your kitchen. Our recipe suggestions are designed to help you make the most of your ingredients, ensuring that nothing goes to waste. Whether you’re looking to save time, reduce food waste, or just try something new, Frugal Feast has you covered.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <a href="#learn-about" class="rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-fandangoPink text-black text-white">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-fandangoPink top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-black transition duration-300 group-hover:text-white ease font-bold ">Get Started.</span>
          </a>
          <Link to="./search" class="rounded-md px-6 py-3 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-fandangoPink text-black text-white">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-fandangoPink top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-black transition duration-300 group-hover:text-white ease font-bold">Find Recipes.</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
