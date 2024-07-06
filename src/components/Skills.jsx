import React from 'react'
import javascript from "./icons8-javascript-240.png"
import reactjs from "./icons8-react-480.png"
import materialui from "./icons8-material-ui-240.png"
import git from "./icons8-git-240.png"
import github from "./icons8-github-256.png"
import HTMLicon from "./icons8-html-240.png";
import vite from "./icons8-vite-logo-144.png";
import tailwind from "./icons8-tailwindcss-240.png"
import CSSicon from "./icons8-css-240.png";
export default function Skills() {
    const skills =[
        {
            key:1,
            techno:"HTML",
            imag:HTMLicon,
            Style:'shadow-[#e65100]'
        },
        {
            key:2,
            techno:"CSS",
            imag:CSSicon,
            Style:'shadow-[#0277bd]'
        },
        {
            key:3,
            techno:"JavaScript",
            imag:javascript,
            Style:'shadow-[#ffd600]'
        },
        {
            key:4,
            techno:"ReactJS",
            imag:reactjs,
            Style:'shadow-[#7ba7e0]'
        },
        {
            key:5,
            techno:"Tailwind",
            imag:tailwind,
            Style:'shadow-[#00acc1]'
        },
        {
            key:6,
            techno:"MaterialUI",
            imag:materialui,
            Style:'shadow-[#07649a]'
        },
        {
            key:7,
            techno:"Git",
            imag:git,
            Style:'shadow-[#f4511e]'
        },
        {
            key:8,
            techno:"GitHub",
            imag:github,
            Style:'shadow-[#ffffff]'
        },
        {
            key:9,
            techno:"Vite",
            imag:vite,
            Style:'shadow-[#6e78db]'
        },
        
    ];
  return (
    <div id='skills' className='bg-gradient-to-b from-black to-gray800 text-white w-full h-max'>
      <div className='max-w-screen-lg p-6 mx-auto flex flex-col  w-full h-full justify-center align-middle'>
      
          <div className='py-24'>
            <p className='text-4xl font-bold  inline border-b-4 border-gray500'>Skills</p>
            <p className='text-2xl mt-20'>These are the technologies I've worked with </p>  
      </div>
      <div className='w-auto flex flex-row gap-3 flex-wrap justify-around  '>
      {skills.map((item) => (

<div key={item.key} className={`min-[601px]:w-[250px] min-[601px]:h-[15rem] max-[600px]:w-[150px] max-[600px]:h-[10rem] mt-4 shadow-md  flex flex-col  rounded-md hover:scale-105 justify-center items-center ${item.Style}`} >
          <img src={item.imag} alt='NNN'  className='capture  h-[90%] w-52 rounded-t-md drop-shadow-2xl  '></img>
          <div className='flex flex-col justify-around h-full'>
            <p className='text-2xl font-medium'>{item.techno}</p>
          </div>
         
        </div>
))}
      </div>
      </div>
      </div>
  )
}
