import React from 'react'
import tomatoSoup from '../Images/pexels-foodie-factor-162291-539451.jpg'
import freshBread from '../Images/pexels-fmaderebner-745988.jpg'
import burger from '../Images/pexels-adrian-dorobantu-989175-2089717.jpg'
import panini from '../Images/pexels-fotios-photos-1885578.jpg'
import grilledSalmon from '../Images/pexels-dana-tentis-118658-262959.jpg'
import dumplingSoup from '../Images/pexels-catscoming-955137.jpg'

const TopRecipes = () => {
  return (
    <section className='max-w-7xl mx-auto px-6 py-12'>
      <hr className='w-1/4 mx-auto mb-8 border-gray-300' />
      <div className='flex flex-col items-center mb-12'>
        <p className='text-blue-600 text-4xl font-semibold mb-4'>Top Recipes</p>
        <p className='text-center text-gray-700 md:w-2/3'>
          Check out our most popular recipes, each one beautifully captured in these mouthwatering pictures. From classic comfort foods to innovative new dishes, there's something for everyone to love.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='relative'>
          <img className='w-full h-full object-cover rounded-lg shadow-md' src={tomatoSoup} alt="Tomato Soup" />
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg shadow-md' src={freshBread} alt="Fresh Bread" />
          </div>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg shadow-md' src={burger} alt="Burger" />
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg shadow-md' src={panini} alt="Panini" />
          </div>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg shadow-md' src={grilledSalmon} alt="Grilled Salmon" />
          </div>
          <div className='relative'>
            <img className='w-full h-full object-cover rounded-lg shadow-md' src={dumplingSoup} alt="Dumpling Soup" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopRecipes
