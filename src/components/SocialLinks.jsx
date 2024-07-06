import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
export default function SocialLinks() {
  return (
    <div className='flex  h-16  w-48  gap-4 justify-start rounded-md a items-center '>
     <a href='n' target="_blank" title="Linkedin Profil">
         <FaLinkedin size={26} ></FaLinkedin>
     </a>

      <a href='https://github.com/nnesrine' target="_blank" title="Github Profil" rel="noreferrer">
        <FaGithub size={26}></FaGithub>
      </a >
      <a   title="Send Email" href= "mailto: nasrinesrine20@gmail.com">
        <MdOutlineMail size={26}></MdOutlineMail>
      </a>
      <a href='n' target="_blank" download={true} title=" PDF Resume">
        <BsPersonLinesFill size={26}></BsPersonLinesFill>
      </a>
    </div>
  )
}
