import React from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto   w-full h-full'>
                <div className='flex justify-center'>
                    <Link to='home' smooth duration={500} className='text-center cursor-pointer'>@subhashYadav</Link>
                </div>
                <div>
                <Link to='home' smooth duration={500}>
                <BsFillArrowUpCircleFill className="float-right mr-5 -mt-20 text-4xl cursor-pointer text-gray-400" />
                </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer