import React from 'react'
import tomatoSoup from '../Images/pexels-foodie-factor-162291-539451.jpg'
import freshBread from '../Images/pexels-fmaderebner-745988.jpg'
import burger from '../Images/pexels-adrian-dorobantu-989175-2089717.jpg'
import panini from '../Images/pexels-fotios-photos-1885578.jpg'
import grilledSalmon from '../Images/pexels-dana-tentis-118658-262959.jpg'
import dumplingSoup from '../Images/pexels-catscoming-955137.jpg'

const TopRecipes = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div className='flex flex-col items-center mb-8'>
                <p className='font-bold text-3xl mb-4'>Top Recipes</p>
                <p className='text-center w-1/2'>Check out our most popular recipes, each one beautifully captured in these mouthwatering pictures. From classic comfort foods to innovative new dishes, there's something for everyone to love</p>
            </div>

            <div className='grid gap-4 max-w-4xl mx-auto m-10'>
                <div className='h-128'>
                    <img className='w-full h-full object-cover rounded-lg' src={tomatoSoup} alt="Tomato Soup" />
                </div>
                <div className='grid grid-cols-5 gap-4'>
                    <div className='h-32'>
                        <img className='w-full h-full object-cover rounded-lg' src={freshBread} alt="Fresh Bread" />
                    </div>
                    <div className='h-32'>
                        <img className='w-full h-full object-cover rounded-lg' src={burger} alt="Burger" />
                    </div>
                    <div className='h-32'>
                        <img className='w-full h-full object-cover rounded-lg' src={panini} alt="Panini" />
                    </div>
                    <div className='h-32'>
                        <img className='w-full h-full object-cover rounded-lg' src={grilledSalmon} alt="Grilled Salmon" />
                    </div>
                    <div className='h-32'>
                        <img className='w-full h-full object-cover rounded-lg' src={dumplingSoup} alt="Dumpling Soup" />
                    </div>
                </div>
            </div>
            {/* <hr className='w-1/3 mx-auto m-8' /> */}
        </section>
    )
}

export default TopRecipes
