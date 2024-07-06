import React from 'react'
import image from "./WEBDEV.gif";
import { GoArrowRight } from "react-icons/go";
import SocialLinks from './SocialLinks';
export default function Herosec() {
  
  const scrooltoprojects = (id) => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
  };
  return (
   
   <div id='home' className=' flex w-full text-white py-14 bg-black h-auto justify-around items-center max-[970px]:flex-col-reverse '>
   

      <div className='lg:mx-28 max-[1023px]:mx-8 flex-col flex ' >
        <h1 className='text-6xl max-[660px]:text-4xl font-bold   '>I'm a Front End Developer</h1>
        <p className='mt-4 text-gray500'>
            Hello, My name is Nasri Nesrine, I'm Front-End Web Developer With expertise in HTML, CSS, and JavaScript, and proficiency in frameworks like ReactJS, TailwindCSS, and more.
        </p>
        <SocialLinks></SocialLinks>
        <button onClick={scrooltoprojects} className='mt-4 w-24 p-2  rounded-md font-medium bg-gradient-to-r from-indigo500 to-purple500 flex items-center justify-between '>Projects<GoArrowRight className='hover:rotate-90 duration-300' ></GoArrowRight>
        </button>
      </div>
      <img src={image} alt='ddd'className='mt-14 mr-8' ></img>
    </div>
  )
}
