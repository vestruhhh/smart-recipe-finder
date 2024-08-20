import React from 'react'
import piggyBank from '../Images/piggy-bank_8255740.png'
import variety from '../Images/multitasking_12679987.png'
import minimizeWaste from '../Images/composting_12078398.png'

const AboutUs = () => {
  return (
    <section className='flex flex-col max-w-7xl mx-auto px-6 py-12'>
      <div className='flex flex-col items-center text-gray-900 text-center mb-16'>
        <h1 className='text-blue-600 text-4xl font-semibold mb-6' id="learn-about">What is Frugal Feast?</h1>
        <p className='text-lg md:text-base text-gray-700 md:w-2/3'>
          Frugal Feast is a practical service dedicated to helping individuals save money on groceries and make the most of their ingredients. Whether you're looking to cut down on your food expenses or find creative ways to use up what you already have, Frugal Feast offers tailored solutions and recipes that transform your pantry staples into delicious, cost-effective meals.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 text-center'>
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-lg'>
          <img src={piggyBank} alt="Cost Savings" className='w-24 h-24 mb-4' />
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Cost Savings</h2>
          <p className='text-gray-600'>
            Frugal Feast helps you maximize your grocery budget by providing recipes and meal ideas that utilize what you already have on hand. By focusing on ingredients you already own, you reduce the need for additional purchases and minimize food waste. This not only helps you save money but also encourages a more mindful approach to shopping and meal planning.
          </p>
        </div>
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-lg'>
          <img src={variety} alt="Creativity and Variety" className='w-24 h-24 mb-4' />
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Creativity and Variety</h2>
          <p className='text-gray-600'>
            With Frugal Feast, you can turn everyday ingredients into exciting and diverse meals. The service offers inventive recipes that make the most of your existing pantry and fridge items, introducing you to new culinary possibilities. This creativity helps keep meal times interesting and enjoyable, even when working with a limited selection of ingredients.
          </p>
        </div>
        <div className='flex flex-col items-center p-6 bg-white rounded-lg shadow-lg'>
          <img src={minimizeWaste} alt="Reduced Food Waste" className='w-24 h-24 mb-4' />
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Reduced Food Waste</h2>
          <p className='text-gray-600'>
            Frugal Feast promotes sustainability by helping you use up ingredients before they expire. By suggesting ways to incorporate leftover or unused items into your meals, the service helps prevent food from going to waste. This not only benefits the environment but also helps you get the most value out of every item you purchase.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
