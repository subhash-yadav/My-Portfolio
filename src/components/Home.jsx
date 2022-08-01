import React from 'react'
import heroimage from "../assets/heroimage.jpg"
import {IoMdArrowDropright} from 'react-icons/io';
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white'>
            <div className='mt-28 md:m-0'>
                <h2 className='font-bold text-4xl sm:text-7xl text-white'>I'm a Frontend Developer</h2>
                <p className='text-gray-500 py-4 max-w-md '>I am a <span>Frontend Developer</span> Currently, I love to work on web application using technologies like HTML, CSS, Javascript, Bootstrap, Tailwind, React</p>
                <div className=''>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                        portfolio <span className=' text-2xl mt-[3px] md:mt-0 group-hover:rotate-90 duration-300'><IoMdArrowDropright/></span>
                    </Link>
                </div>
            </div>
            <div className=''>
                <img src={heroimage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full md:h-[340px]'/>
            </div>
        </div>
    </div>
  )
}

export default Home