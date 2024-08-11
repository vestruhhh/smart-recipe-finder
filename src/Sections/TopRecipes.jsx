import React from 'react'

const TopRecipes = () => {
    return (
        <section className='max-w-7xl mx-auto'>
            <div className='flex flex-col items-center mb-8'>
                <p className='font-bold text-3xl mb-4'>Top Recipes</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos pariatur expedita sed quam omnis quaerat, voluptatem ratione eligendi adipisci.</p>
            </div>


            <div class="grid gap-4 max-w-4xl mx-auto m-10">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="" />
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* <hr className='w-1/3 mx-auto m-8' /> */}
        </section>
    )
}

export default TopRecipes
