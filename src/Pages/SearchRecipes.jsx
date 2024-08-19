import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import recipeData from '../data/recipes.json';

const SearchRecipes = () => {
    const [searchInput, setSearchInput] = useState('');
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [selectedDiets, setSelectedDiets] = useState([]);
    const [timeFilter, setTimeFilter] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(recipeData);

    const handleSearch = (e) => {
        e.preventDefault();

        const lowercasedSearchInput = searchInput.toLowerCase();

        const filtered = recipeData.filter(recipe => {
            // Check if recipe matches the search input
            const matchesSearch = recipe.ingredients.some(ingredient =>
                ingredient.toLowerCase().includes(lowercasedSearchInput)
            );

            // Check if recipe matches the selected diets
            const matchesDiet = selectedDiets.length === 0 || selectedDiets.includes(recipe.diet);

            // Check if recipe matches the selected allergies
            const matchesAllergies = selectedAllergies.every(allergy =>
                !recipe.ingredients.some(ingredient =>
                    ingredient.toLowerCase().includes(allergy.toLowerCase())
                )
            );

            // Check if recipe matches the selected time filter
            const matchesTime = timeFilter === '' || 
                (timeFilter === 'under-30' && Number(recipe.time) <= 30) ||
                (timeFilter === '30-60' && Number(recipe.time) > 30 && Number(recipe.time) <= 60);

            // Combine all filters
            return matchesSearch && matchesDiet && matchesAllergies && matchesTime;
        });

        setFilteredRecipes(filtered);
    };

    const toggleAllergy = (allergy) => {
        setSelectedAllergies(prevState =>
            prevState.includes(allergy)
                ? prevState.filter(item => item !== allergy)
                : [...prevState, allergy]
        );
    };

    const toggleDiet = (diet) => {
        setSelectedDiets(prevState =>
            prevState.includes(diet)
                ? prevState.filter(item => item !== diet)
                : [...prevState, diet]
        );
    };

    const handleTimeFilterChange = (e) => {
        setTimeFilter(e.target.value);
    };

    return (
        <>
            <Navbar />
            <div className='flex flex-col'>
                {/* Search Form */}
                <div className='bg-gray-200 p-4 border border-red-500'>
                    <form onSubmit={handleSearch}>
                        <div className='flex flex-col sm:flex-row justify-center bg-gray-300 p-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto items-center gap-2 rounded-full'>
                            <div>
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder='Enter your ingredients: '
                                className='w-full sm:w-64 md:w-80 rounded-full px-4'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
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
                                        <input
                                            type="checkbox"
                                            id={allergy}
                                            onChange={() => toggleAllergy(allergy)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <hr className='my-4' />
                            <p className='font-bold underline underline-offset-2 text-center m-2'>Diets</p>
                            <div className='space-y-2'>
                                {['Mediterranean', 'Ketogenic', 'Paleolithic', 'Vegan', 'Vegetarian'].map(diet => (
                                    <div className='flex items-center space-x-2' key={diet}>
                                        <label htmlFor={diet} className='text-sm'>{diet}</label>
                                        <input
                                            type="checkbox"
                                            id={diet}
                                            onChange={() => toggleDiet(diet)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <hr className='my-4' />
                            <p className='font-bold underline underline-offset-2 text-center m-2'>Time</p>
                            <div className='space-y-2'>
                                {['', 'under-30', '30-60'].map(time => (
                                    <div className='flex items-center space-x-2' key={time}>
                                        <input
                                            type="radio"
                                            id={time}
                                            name="timeFilter"
                                            value={time}
                                            checked={timeFilter === time}
                                            onChange={handleTimeFilterChange}
                                        />
                                        <label htmlFor={time} className='text-sm'>{time === '' ? 'Any Time' : time === 'under-30' ? 'Under 30 minutes' : '30 to 60 minutes'}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recipe Cards */}
                    <div className='flex flex-wrap gap-4 p-4 w-full md:w-3/4 mx-auto'>
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe) => (
                                <div className='rounded-md bg-gray-500 p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/6' key={recipe.id}>
                                    <div>
                                        <img src={recipe.img} alt={recipe.title} className='rounded-lg' />
                                    </div>
                                    <div className='p-1'>
                                        <p className='font-bold text-lg'>{recipe.title}</p>
                                        <p>{recipe.instructions}</p>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2">Learn More</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-center w-full'>No recipes found. Try adjusting your search or filters.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SearchRecipes;
