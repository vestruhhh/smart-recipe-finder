import React from 'react'
import piggyBank from '../Images/piggy-bank_8255740.png'
import variety from '../Images/multitasking_12679987.png'
import minimizeWaste from '../Images/composting_12078398.png'

const AboutUs = () => {
  return (
    <section className='flex flex-col max-w-7xl mx-auto'>
      <hr className='w-1/3 mx-auto m-8' />
      <div className='flex flex-col justify-center items-center text-gray-900 mt-8 mb-16 text-center w-2/3 mx-auto'>
        <h1 className='text-3xl font-bold'>What is Frugal Feast?</h1>
        <p className=''>Frugal Feast is a practical service dedicated to helping individuals save money on groceries and make the most of their ingredients. Whether you're looking to cut down on your food expenses or find creative ways to use up what you already have, Frugal Feast offers tailored solutions and recipes that transform your pantry staples into delicious, cost-effective meals.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-32 text-center mb-14'>
        <div className='flex flex-col items-center'>
          <img src={piggyBank} alt="" className='rounded-xl' height={128} width={128} />
          <h1 className='font-bold text-3xl'>Cost Savings</h1>
          <p>Frugal Feast helps you maximize your grocery budget by providing recipes and meal ideas that utilize what you already have on hand. By focusing on ingredients you already own, you reduce the need for additional purchases and minimize food waste. This not only helps you save money but also encourages a more mindful approach to shopping and meal planning.</p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img src={variety} alt="" height={128} width={128} />
          <h1 className='font-bold text-3xl'>Creativity and Variety</h1>
          <p>With Frugal Feast, you can turn everyday ingredients into exciting and diverse meals. The service offers inventive recipes that make the most of your existing pantry and fridge items, introducing you to new culinary possibilities. This creativity helps keep meal times interesting and enjoyable, even when working with a limited selection of ingredients.</p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img src={minimizeWaste} alt="" height={128} width={128} />
          <h1 className='font-bold text-3xl'>Reduced Food Waste</h1>
          <p>Frugal Feast promotes sustainability by helping you use up ingredients before they expire. By suggesting ways to incorporate leftover or unused items into your meals, the service helps prevent food from going to waste. This not only benefits the environment but also helps you get the most value out of every item you purchase.</p>
        </div>
      </div>
      <hr className='w-1/3 mx-auto m-8'/>
    </section>
  )
}

export default AboutUs