import React from 'react'
import reviewOne from '../Images/pexels-andrewpersonaltraining-697509.jpg'
import reviewTwo from '../Images/pexels-joaojesusdesign-1080213.jpg'
import reviewThree from '../Images/pexels-olly-774909.jpg'
import reviewFour from '../Images/pexels-mkvisuals-2884842.jpg'

const Testimonials = () => {
    return (
        <section className='w-3/5 mx-auto my-16'>
            <div className='text-center'>
                <hr className='w-1/3 mx-auto m-8' />
                <p className='text-blue-500 text-3xl'>Happy Users</p>
                <p>Hear what others think!</p>
            </div>
            <div className='flex sm:flex-col w-full lg:flex-row justify-center items-center mx-auto flex-wrap gap-16 my-16'>
                <div className='flex flex-row w-2/5 items-center shadow-2xl bg-gray-100 p-8'>
                    <img src={reviewOne} alt="reviewerOne" className='w-24 h-20 rounded-full object-cover' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“I never knew what to do with those random pantry items. Thanks to this site, I've discovered incredible recipes that make every ingredient count. Jay Rutter, home cook and foodie.”</p>
                        <p>Jay Rutter,  <span className='text-gray-500'>Brisbane AUS</span></p>
                    </div>
                </div>
                <div className='flex flex-row w-2/5 items-center shadow-2xl bg-gray-100 p-8'>
                    <img src={reviewTwo} alt="" className='w-28 h-20 rounded-full object-cover' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“This platform has revolutionized my cooking. I can now use up all those odd ingredients I used to ignore. David Stevens, professional chef and culinary enthusiast.”</p>
                        <p>David Stevens, <span className='text-gray-500'>London UK</span></p>
                    </div>
                </div>
                <div className='flex flex-row w-2/5 items-center shadow-2xl bg-gray-100 p-8'>
                    <img src={reviewThree} alt="" className='w-24 h-20 rounded-full object-cover' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“I was always left wondering what to do with my leftover ingredients. This website has made cooking with what I have so easy and fun. Liz Jacobs, busy mom and meal planner.”</p>
                        <p>Liz Jacobs, <span className='text-gray-500'>Toronto CAN</span></p>
                    </div>
                </div>
                <div className='flex flex-row w-2/5 items-center shadow-2xl bg-gray-100 p-8'>
                    <img src={reviewFour} alt="" className='w-24 h-20 rounded-full object-cover' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“I've turned my kitchen into a playground of creativity, all thanks to this amazing tool. No more wasted ingredients! Sarah Naka, nutritionist and home cook.”</p>
                        <p>Sarah Naka, <span className='text-gray-500'>Portland USA</span></p>
                    </div>
                </div>
            </div>
            <hr className='w-1/3 mx-auto m-8' />
        </section>
    )
}

export default Testimonials
