import React from 'react'
import { PiMapPinAreaLight } from "react-icons/pi";
import { PiPhoneFill } from "react-icons/pi";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex max-[600px]:flex-col bg-gradient-to-b from-black to-gray800 shadow-lg shadow-gray500 w-full h-auto p-6 text-white justify-between items-center ">
      <div className='p-4 flex flex-col gap-3'>
        <p className='text-xl font-bold  inline border-b-4 border-gray500 mb-2'>Contact Details</p>
          <span className='flex items-center  gap-4'>
            <PiMapPinAreaLight size={26}></PiMapPinAreaLight>
            <p className='text-lg'>Wilaya M'sila</p>
          </span>
          <span className='flex items-center gap-4'>
            <PiPhoneFill size={26}></PiPhoneFill>
            <p className='text-lg'>06 96 80 91 92</p>
          </span>
          <span className='flex items-center  gap-4'>
            <HiMail size={26}></HiMail>
            <p className='text-lg'>nasrinesrine20@gmail.com</p>
          </span>
      </div>
      <div className='flex  h-16  w-48  gap-4 flex-col rounded-md  items-center min-[601px]:mr-48 '>
     <a href='https://www.linkedin.com/in/nesrine-n-ba2694218/'  title="Linkedin Profil" className='flex items-center gap-4'>
         <FaLinkedin size={26} ></FaLinkedin>
         <p className='text-lg'> Nesrine Nasri
         </p>
     </a>

      <a href='https://github.com/nnesrine' target="_blank" title="Github Profil" className='flex items-center gap-4' rel="noreferrer">
        <FaGithub size={26}></FaGithub>
        <p className='text-lg'>Nasri Nesrine</p>
      </a >
      
    </div>
    
    </div>
  )
}
