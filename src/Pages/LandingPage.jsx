import React from 'react'
import Navbar from '../Components/Navbar'
import LandingLogo from '../Images/restaurant.svg'

const LandingPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className='flex justify-center items-center border border-red-600 h-screen'>
        <div className='border border-fandangoPink'>
          <img src={LandingLogo} alt="Landing Logo" />
        </div>
        <div className='flex flex-col justify-around items-center border border-fandangoPink h-1/3 w-1/3'>
          <div>
            <h1 className='font-bold text-6xl text-center'>Discover Delicious Recipes with What You Have!</h1>
          </div>
          <div>
            <p class="text-gray-500 dark:text-gray-400">Enter your available ingredients and get recipe suggestions tailored to your dietary preferences.</p>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
          </div>
          <div className='flex space-x-4'>
            <button className='bg-fandangoPink rounded-lg w-28'>Find Recipes</button>
            <button className='bg-fandangoPink rounded-lg w-28'>Get Started</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage;
