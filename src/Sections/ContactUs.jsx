import React from 'react';

const ContactUs = () => {
    return (
        <section className='bg-gray-900 py-8'>
            <div className=''>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-8'>
                        <p className='text-white text-4xl mb-4'>Contact Us</p>
                        <p className='text-gray-400 text-center w-1/3 mx-auto text-lg'>
                            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row md:space-x-8'>
                        <div className='w-full md:w-2/3 mb-8 md:mb-0'>
                            <form action="" className='space-y-8 text-white'>
                                {/* Row 1 */}
                                <div className='flex flex-col md:flex-row md:space-x-4'>
                                    <div className='flex-1'>
                                        <label htmlFor="firstName" className='block'>First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            placeholder='Bonnie'
                                            className='bg-gray-500 w-full py-2 px-3 text-gray-900 rounded'
                                        />
                                    </div>
                                    <div className='flex-1 mt-4 md:mt-0'>
                                        <label htmlFor="lastName" className='block'>Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            placeholder='Green'
                                            className='bg-gray-500 w-full py-2 px-3 text-gray-900 rounded'
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className='flex flex-col md:flex-row md:space-x-4'>
                                    <div className='flex-1'>
                                        <label htmlFor="email" className='block'>Your Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder='name@frugalfeast.com'
                                            className='bg-gray-500 w-full py-2 px-3 text-gray-900 rounded'
                                        />
                                    </div>
                                    <div className='flex-1 mt-4 md:mt-0'>
                                        <label htmlFor="phone" className='block'>Phone Number:</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder='123-456-7890'
                                            className='bg-gray-500 w-full py-2 px-3 text-gray-900 rounded'
                                        />
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div>
                                    <label htmlFor="message" className='block'>Your message</label>
                                    <textarea
                                        id="message"
                                        placeholder='Leave a comment...'
                                        className='bg-gray-500 w-full py-2 px-3 text-gray-900 rounded'
                                        rows="4"
                                    />
                                </div>
                                <p className='text-gray-400'>By submitting this form you agree to our <span className='text-blue-400'>terms and conditions </span>and our <span className='text-blue-400'>privacy policy</span> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                                <button type='submit' className='bg-blue-600 text-white  py-2 px-4 rounded-lg'>Send message</button>
                            </form>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <div className='flex flex-col space-y-8 text-center'>
                                <div>
                                    <img src="https://placehold.co/60x60" alt="" className='mx-auto mb-4' />
                                    <p className='text-white text-xl mb-2'>Company information:</p>
                                    <p className='text-gray-400'>Themesberg LLC</p>
                                    <p className='text-gray-400'>Tax id: USXXXXXX</p>
                                </div>
                                <div>
                                    <img src="https://placehold.co/70x70" alt="" className='mx-auto mb-4' />
                                    <p className='text-white text-xl mb-2'>Address:</p>
                                    <p className='text-gray-400'>SILVER LAKE, United States 1941 Late Avenue </p>
                                    <p className='text-gray-400'>Zip Code/Postal code:03875</p>
                                </div>
                                <div>
                                    <img src="https://placehold.co/70x70" alt="" className='mx-auto mb-4' />
                                    <p className='text-white text-xl mb-2'>Call us:</p>
                                    <p className='text-gray-400'>Call us to speak to a member of our team. We are always happy to help.</p>
                                    <p className='text-blue-500 font-bold'>+1 (646) 786-5060</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
