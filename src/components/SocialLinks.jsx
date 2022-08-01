import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
const SocialLinks = () => {
    let links =[
        {
            id:1,
            child:(
                <>LinkedIn <FaLinkedin size={30} /> </>
            ),
            href:"https://linkedin.com",
            style: "roundes-tr-md",
            target:"_blank"
        },
        {
            id:2,
            child:(
                <>GitHub <FaGithub size={30} /> </>
            ),
            href:"https://github.com/subhash-yadav",
            target:"_blank"
            
        },
        {
            id:3,
            child:(
                <>Mail <HiOutlineMail size={30} /> </>
            ),
            href:"mailto:subhash41828@gmail.com",
            target:"_blank"
        },
        {
            id:4,
            child:(
                <>Resume<BsFillPersonLinesFill size={30} /> </>
            ),
            href:"/resume.pdf",
            style: "roundes-br-md",
            download: true,
            target:"_blank"
        },
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {links.map(({id, child, href, style, download,target})=>(
                      <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:rounded-md hover:ml-[-10px] duration-300" + " " + style} ><a href={href} target={target} className='flex justify-between items-center w-full text-white' download={download}>{child}</a></li>
                ))}

              
            </ul>
        </div>
    )
}

export default SocialLinks