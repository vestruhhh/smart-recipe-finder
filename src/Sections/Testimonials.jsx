import React from 'react'

const Testimonials = () => {
    return (
        <section className='w-3/5 mx-auto my-16'>
            <div className='text-center'>
                <hr className='w-1/3 mx-auto m-8' />
                <p className='text-blue-500 text-3xl'>Happy Users</p>
                <p>Hear what others think!</p>
            </div>
            <div className='flex flex-row justify-center items-center mx-auto flex-wrap gap-16 my-16'>
                <div className='flex flex-row w-2/5'>
                    <img src="https://placehold.co/100x100" alt="" className='rounded-full' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“My trusted travel guide. I travel a lot and this was my most reliable source of information.”</p>
                        <p>Liz Jacobs, <span className='text-gray-500'>Toronto CAN</span></p>
                    </div>
                </div>
                <div className='flex flex-row w-2/5'>
                    <img src="https://placehold.co/100x100" alt="" className='rounded-full' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“I backpacked through Kenya with nothing more than my clothes, a travel guide, and a dream. It changed my life.”</p>
                        <p>David Stevens, <span className='text-gray-500'>London UK</span></p>
                    </div>
                </div>
                <div className='flex flex-row w-2/5'>
                    <img src="https://placehold.co/100x100" alt="" className='rounded-full' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“My trusted travel guide. I travel a lot and this was my most reliable source of information.”</p>
                        <p>Jay Rutter,  <span className='text-gray-500'>Brisbane AUS</span></p>
                    </div>
                </div>
                <div className='flex flex-row w-2/5'>
                    <img src="https://placehold.co/100x100" alt="" className='rounded-full' />
                    <div className='flex flex-col ml-4'>
                        <p className='italic text-sm'>“My trusted travel guide. I travel a lot and this was my most reliable source of information.”</p>
                        <p>Sarah Naka, <span className='text-gray-500'>Portland USA</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials