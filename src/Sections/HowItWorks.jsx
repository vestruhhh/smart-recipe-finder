import React from 'react';

const HowItWorks = () => {
  return (
    <section className='flex flex-col items-center justify-center p-8 bg-gray-50'>
      <hr className='w-1/5 mx-auto mb-12 border-gray-300' />
      <div className='text-center mb-12'>
        <p className='text-4xl font-semibold text-gray-800'>How it Works</p>
      </div>
      <div className='flex flex-col md:flex-row max-w-7xl gap-8'>
        <div className='bg-white text-center p-6 rounded-lg shadow-md font-medium flex-1'>
          <p className='text-xl font-semibold text-gray-900 mb-4'>Step One</p>
          <p className='text-base text-gray-700'>Start by taking stock of the ingredients you already have on hand. Make a list of pantry staples, leftover items, and any perishable goods that need to be used up.</p>
        </div>
        <div className='bg-white text-center p-6 rounded-lg shadow-md font-medium flex-1'>
          <p className='text-xl font-semibold text-gray-900 mb-4'>Step Two</p>
          <p className='text-base text-gray-700'>Using the Frugal Feast platform, input your available ingredients or browse through suggested recipes that utilize common pantry items.</p>
        </div>
        <div className='bg-white text-center p-6 rounded-lg shadow-md font-medium flex-1'>
          <p className='text-xl font-semibold text-gray-900 mb-4'>Step Three</p>
          <p className='text-base text-gray-700'>Once you’ve chosen your recipes, create a meal plan for the week. Keep the list minimal and prioritize ingredients that complement what you already own, helping you save money and reduce waste.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
