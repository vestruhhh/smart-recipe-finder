import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
// import recipeData from '../data/recipes.json';

const SearchRecipes = () => {

    return (
        <>
            <Navbar />
            <div className='flex flex-col'>
                {/* Search Form */}
                <div className='bg-gray-200 p-4 border border-red-500'>
                    <form action="">
                        <div className='flex flex-col sm:flex-row justify-center bg-gray-300 p-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto items-center gap-2 rounded-full'>
                            <div>
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" placeholder='Enter your ingredients: ' className='w-full sm:w-64 md:w-80 rounded-full px-4' />
                            <button type='submit' className='bg-blue-500 rounded-full px-4 py-1 font-bold'>Search</button>
                        </div>
                    </form>
                </div>

                {/* Main Content */}
                <div className='flex flex-col md:flex-row'>
                    {/* Sidebar */}
                    <div className='bg-gray-100 p-4 w-full md:w-1/12'>
                        <div className='flex flex-col'>
                            <p className='font-bold underline underline-offset-2 text-center m-2'>Allergies</p>
                            <div className='space-y-2'>
                                {['Nuts', 'Dairy', 'Eggs', 'Shellfish', 'Soy', 'Wheat', 'Sesame'].map(allergy => (
                                    <div className='flex items-center space-x-2' key={allergy}>
                                        <label htmlFor={allergy} className='text-sm'>{allergy}</label>
                                        <input type="checkbox" id={allergy} />
                                    </div>
                                ))}
                            </div>
                            <hr className='my-4' />
                            <p className='font-bold underline underline-offset-2 text-center m-2'>Diets</p>
                            <div className='space-y-2'>
                                {['Mediterranean', 'Ketogenic', 'Paleolithic', 'Vegan', 'Vegetarian'].map(diet => (
                                    <div className='flex items-center space-x-2' key={diet}>
                                        <label htmlFor={diet} className='text-sm'>{diet}</label>
                                        <input type="checkbox" id={diet} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recipe Cards */}
                    <div className='flex flex-wrap gap-4 p-4 w-full md:w-3/4 mx-auto'>
                        {Array.from({ length: 20 }).map((_, index) => (
                            <div className='rounded-md bg-gray-500 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/6' key={index}>
                                <div>
                                    <img src="https://placehold.co/300x200" alt="Recipe" className='rounded-lg' />
                                </div>
                                <div className='p-1'>
                                    <p className='font-bold text-lg'>Banana Bread</p>
                                    <p>Transform ripe bananas into a moist, flavorful loaf with this classic banana bread recipe. Infused with vanilla and a hint of cinnamon, it’s perfect for breakfast, snacks, or a cozy treat. Easy to make and deliciously comforting!</p>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">Learn More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SearchRecipes;
