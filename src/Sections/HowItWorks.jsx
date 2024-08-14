import React from 'react';

const HowItWorks = () => {
  return (
    <section className='flex flex-col items-center justify-around space-y-8 p-8'>
      <hr className='w-1/5 mx-auto m-8' />
      <div>
        <p className='font-bold text-3xl'>How it Works</p>
      </div>
      <div className='flex max-w-7xl sm:flex-col gap-y-8 md:flex-row gap-x-8'>
        <div className='bg-gray-200 text-center p-4 rounded-lg shadow-lg font-light sm:w-2/3 mx-auto md:w-full '>
          <p className='font-bold text-lg'>Step One.</p>
          <p className='text-sm'>Start by taking stock of the ingredients you already have on hand. Make a list of pantry staples, leftover items, and any perishable goods that need to be used up.</p>
        </div>
        <div className='bg-gray-200 text-center p-4 rounded-lg shadow-lg font-light sm:w-2/3 mx-auto md:w-full'>
          <p className='font-bold text-lg'>Step Two.</p>
          <p className='text-sm'>Using the Frugal Feast platform, input your available ingredients or browse through suggested recipes that utilize common pantry items.</p>
        </div>
        <div className='bg-gray-200 text-center p-4 rounded-lg shadow-lg font-light sm:w-2/3 mx-auto md:w-full'>
          <p className='font-bold text-lg'>Step Three.</p>
          <p className='text-sm'>Once you’ve chosen your recipes, create a meal plan for the week. Keep the list minimal and prioritize ingredients that complement what you already own, helping you save money and reduce waste.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
