import React from 'react';
import { DiGithubAlt } from "react-icons/di";
import javascript from "./icons8-javascript-48.png"
import reactjs from "./icons8-react-js-48.png"
import materialui from "./icons8-material-ui-48.png"
import vite from "./icons8-vite-logo-48.png"
import prayerstimes from "./prayerstimes.png"
import HTMLicon from "./HTML.png";
import ecommerce from "./ecommerceweb.png"
import portfolio from "./portfolio.png"
import tailwind from "./icons8-tailwind-css-48.png"
import captureimg from "./Capture d.13.png"
import featurecomp from "./FeaturesComparison.png"
import coursebox from "./CoursesBox.png"
import CSSicon from "./CSS.png";
import featuredProducts from "./featuredProducts.png"
import GamingProfil from "./GamingProfil.png"
import PictureWithFrame from "./PictureWithFrame.png"
import TeamSkills from "./TeamSkills.png"
import loan from "./loan.png"
export default function Projects() {
  const myprojects=[
    { key: 1, title: "Requesting a loan",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
      <img src={javascript} alt="jj" />
      <img src={reactjs} alt="jj" />
      
      
    </>,
       Capture:loan,
       linkgithub:"https://github.com/nnesrine/Requesting-a-loan"
  },
    { key: 2, title: "Front-end Times Prayers",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
      <img src={javascript} alt="jj" />
      <img src={reactjs} alt="jj" />
      <img src={materialui} alt="jj" />
      <img src={vite} alt="jj" />
    </>,
       Capture:prayerstimes,
       linkgithub:"https://github.com/nnesrine/Application-of-prayer-times"
  },
  { key: 3, title: " Front-end Portfolio",tools: <>
    <img src={HTMLicon} alt="jj" />
    <img src={CSSicon} alt="jj" />
    <img src={javascript} alt="jj" />
    <img src={reactjs} alt="jj" />
    <img src={tailwind} alt="jj" />
  </>,
     Capture:portfolio,
     linkgithub:"https://github.com/nnesrine/Portfolio"
  },
  { key: 4, title: "E-commece web site",tools: <>
    <img src={HTMLicon} alt="jj" />
    <img src={CSSicon} alt="jj" />
    <img src={javascript} alt="jj" />
    <img src={reactjs} alt="jj" />
    <img src={materialui} alt="jj" />
   
  </>,
     Capture:ecommerce,
     linkgithub:"https://github.com/nnesrine/React-e-commerce-project/tree/master"
  },
    { key: 5, title: "Card with transparent image",Capture:captureimg,tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
    </>,
   
     },

    { key: 6, title: "Frontend features comparison",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
    </> ,
     Capture:featurecomp,
     linkgithub:"https://github.com/nnesrine/HTML-CSS-Projects"},

    { key: 7, title: "Frontend course offer box",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
    </>,
     Capture:coursebox,
     linkgithub:"https://github.com/nnesrine/HTML-CSS-Projects" },

    { key: 8, title: "Frontend featured products",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
    </>,
     Capture:featuredProducts,
     linkgithub:"https://github.com/nnesrine/HTML-CSS-Projects" },
    { key: 9, title: "Frontend gaming profile sections",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
    </> ,
     Capture:GamingProfil,
     linkgithub:"https://github.com/nnesrine/HTML-CSS-Projects"},
     { key:10, title: "Frontend picture with frame",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
    </>,
     Capture:PictureWithFrame,
     linkgithub:"https://github.com/nnesrine/HTML-CSS-Projects"},
     { key: 11, title: "Team skills and stats design",tools: <>
      <img src={HTMLicon} alt="jj" />
      <img src={CSSicon} alt="jj" />
    </>,
       Capture:TeamSkills,
        linkgithub:"https://github.com/nnesrine/HTML-CSS-Projects"
  },
  
  ];
  return (
    <div id='projects' className='bg-gradient-to-b from-gray800 to-black text-white w-full h-max'>
      <div className='max-w-screen-lg p-6 mx-auto flex flex-col  w-full h-full justify-center items-center'>
      <div className='flex   w-full justify-between items-center flex-wrap '>
          <div className='py-24'>
            <p className='text-4xl font-bold  inline border-b-4 border-gray500'>Projects</p>
            <p className='text-2xl mt-20'>Check out some of my work right here</p>
            
          </div>
         
      </div>
        <div className='w-auto flex flex-row gap-3 flex-wrap max-[600px]:justify-center items-center  '>
          {myprojects.map((item) => (

  <div key={item.key} className='w-[314px] h-[25rem] mt-4  border-2 border-[#131922] flex flex-col drop-shadow-xl] rounded-md' >
            <img src={item.Capture} alt='NNN' className='capture  h-max-[63%] rounded-t-md hover:scale-105'></img>
            <div className='flex flex-col ml-4 justify-around h-full'>
              <p className='text-2xl font-medium'>{item.title}</p>
              <div className='flex w-7'>
                {item.tools}
              </div>
             <a className='w-full  flex justify-center items-center' href={item.linkgithub}>
               <button  className='p-2 ml-0 w-10/12 rounded-md font-bold bg-gradient-to-r from-indigo500 to-purple500 flex items-center justify-center mx-4 gap-1'>GITHUB
               <DiGithubAlt size={28}/>
              </button>
             </a>
            </div>
           
          </div>
  ))}

        </div>
      </div>
    </div>
  )
}
