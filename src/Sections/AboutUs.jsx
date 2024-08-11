import React from 'react'

const AboutUs = () => {
  return (
    <section className='flex flex-col max-w-7xl mx-auto'>
      <div className='flex flex-col justify-center items-center text-gray-900 mt-8 mb-16 text-center'>
        <h1 className='text-3xl font-bold'>What is Frugal Feast?</h1>
        <p className=''>Our experienced travel professionals have trekked the globe to cover the best destinations and select stunning, out-of-ordinary experiences. Discover Yonder's comprehensive travel guides to plan your next adventure. </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 mx-auto gap-32 text-center mb-14'>
        <div className='flex flex-col items-center'>
          <img src="https://placehold.co/200x200" alt="" className='rounded-xl'/>
          <h1 className='font-bold text-3xl'>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, ea.</p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img src="https://placehold.co/200x200" alt="" />
          <h1 className='font-bold text-3xl'>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, ea.</p>
        </div>
        <div className='flex flex-col items-center text-center'>
          <img src="https://placehold.co/200x200" alt="" />
          <h1 className='font-bold text-3xl'>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, ea.</p>
        </div>
      </div>
      <hr className='w-1/3 mx-auto m-8'/>
    </section>
  )
}

export default AboutUs