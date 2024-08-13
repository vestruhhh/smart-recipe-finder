import React from 'react'
// import Navbar from '../Components/Navbar'
// import LandingLogo from '../Images/restaurant.svg'
import Logo from '../Images/cheap-dollar.png'
import Video from '../Videos/8581127-hd_1920_1080_30fps.mp4'; // Update with your actual video file name

const LandingPage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <section className='relative flex justify-center items-center h-screen overflow-hidden bg-black'>
                <video
                    src={Video}
                    autoPlay
                    loop
                    muted
                    className='absolute top-0 left-0 w-full h-full object-cover blur-lg'
                />
                <div className='relative flex flex-col justify-around items-center h-1/2 w-1/3 '>
                    <div className="flex flex-row">
                        <img src={Logo} className="h-auto max-w-full" alt="Flowbite Logo" width={100} height={50} />

                        <h1 className='text-8xl'>Frugal Feast</h1>
                    </div>
                    <div>
                        <h1 className='font-bold text-6xl text-center'>Turn Unused Ingredients into Delicious Creations!</h1>
                    </div>
                    <div>
                        <p className='text-black text-center text-xl'>Enter your available ingredients and get recipe suggestions tailored to your dietary preferences.</p>
                        <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-1/2 mx-auto' />
                        <p className='text-center text-black text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque tempore debitis, at explicabo architecto.</p>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="#_" class="flex items-center justify-center px-4 py-2 text-base leading-6 text-black whitespace-no-wrap bg-fandangoPink font-bold border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:border-fandangoPink focus:outline-none">
                            Get Started
                        </a>
                        <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-fandangoPink rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-fandangoPink group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-black font-bold transition-all duration-300 transform group-hover:translate-x-full ease">Find Recipes</span>
                            <span class="relative invisible">Get Started</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage;
