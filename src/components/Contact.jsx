import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col w-full h-full justify-center '>
            <div classname="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/e938f912-e4ef-4aa6-9af3-4122586c4e95" method='POST' className='flex flex-col  w-4/5 space-y-2'>
                    <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="email" name="name" placeholder="Enter your email" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name='message'  rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-16 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact