import React from 'react';

const HowItWorks = () => {
  return (
    <section className='flex flex-col max-w-7xl mx-auto'>
      <div className='text-center mb-8'>
        <p className='font-bold text-3xl'>How it Works</p>
      </div>
      <div className='flex flex-row justify-start w-full items-center space-x-8 mx-auto p-16'>
        <div className='bg-gray-200 p-4 text-center'>
          <p className='font-bold text-lg'>Step One.</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deserunt, porro quidem quo exercitationem qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error tempora dolor blanditiis voluptates sequi.</p>
        </div>
        <div className='bg-gray-200 p-4 text-center'>
          <p className='font-bold text-lg'>Step Two.</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deserunt, porro quidem quo exercitationem qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error tempora dolor blanditiis voluptates sequi.</p>
          </div>
        <div className='bg-gray-200 p-4 text-center'>
          <p className='font-bold text-lg'>Step Three.</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate deserunt, porro quidem quo exercitationem qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam error tempora dolor blanditiis voluptates sequi.</p>
          </div>
      </div>
      <hr className='w-1/3 mx-auto m-8' />
    </section>
  );
}

export default HowItWorks;
