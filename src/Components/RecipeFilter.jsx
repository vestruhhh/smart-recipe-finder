import React from 'react';

const RecipeFilter = () => {
    return (
        <section className='flex flex-col bg-gray-200 min-w- h-screen text-center border border-red-500'>
            <div className='m-4'>
                <p className='font-bold'>Allergies</p>
                <div className='flex flex-wrap justify-center items-center w-92 gap-2 border border-red-500'>
                    <div className='flex items-center'>
                        <input type="checkbox" id="nuts" />
                        <label htmlFor="nuts" className='ml-2'>Nuts</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="dairy" />
                        <label htmlFor="dairy" className='ml-2'>Dairy</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="eggs" />
                        <label htmlFor="eggs" className='ml-2'>Eggs</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="wheat" />
                        <label htmlFor="wheat" className='ml-2'>Wheat</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="soy" />
                        <label htmlFor="soy" className='ml-2'>Soy</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="shellfish" />
                        <label htmlFor="shellfish" className='ml-2'>Shellfish</label>
                    </div>
                </div>
            </div>
            <div className='m-4'>
                <p className='font-bold'>Diet</p>
                <div className='flex flex-wrap justify-center items-center w-92 gap-2 border border-red-500'>
                    <div className='flex items-center'>
                        <input type="checkbox" id="mediterranean" />
                        <label htmlFor="mediterranean" className='ml-2'>Mediterranean</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="ketogenic" />
                        <label htmlFor="ketogenic" className='ml-2'>Ketogenic</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="paleo" />
                        <label htmlFor="paleo" className='ml-2'>Paleo</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="vegan" />
                        <label htmlFor="vegan" className='ml-2'>Vegan</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="vegetarian" />
                        <label htmlFor="vegetarian" className='ml-2'>Vegetarian</label>
                    </div>
                    <div className='flex items-center'>
                        <input type="checkbox" id="gluten-free" />
                        <label htmlFor="gluten-free" className='ml-2'>Gluten Free</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecipeFilter;
