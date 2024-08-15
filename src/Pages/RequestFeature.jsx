import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const RequestFeature = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Request a New Feature</h1>
          <p className="text-lg mb-8">Help us improve by sharing your ideas with us!</p>
        </div>
      </div>
      <main className="flex-grow">
        <div className='max-w-screen-lg h-1/2 mx-auto'>
          <div className='bg-gray-700 mx-auto rounded-lg p-8 my-8 sm:my-6 md:w-4/5 lg:w-3/5 xl:w-1/2'>
            <div className='flex flex-col items-start justify-center mb-6'>
              <p className='font-bold text-xl text-white'>Missing a Feature?</p>
              <p className='text-white text-sm'>Anything you're missing in our product? Drop a message below and let us know!</p>
            </div>
            <p className='font-bold text-white mb-2'>Please describe the feature you need *</p>
            <p className='text-white mb-4'>The more detail you can share the better.</p>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
            <div className='flex flex-col sm:flex-row gap-2 mt-4'>
              <input
                type="submit"
                className='bg-blue-500 rounded-lg px-4 py-2 text-white font-bold text-sm w-full sm:w-auto'
                value="Submit"
              />
              <input
                type="reset"
                className='bg-blue-500 rounded-lg px-4 py-2 text-white font-bold text-sm w-full sm:w-auto'
                value="Reset"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default RequestFeature
