import React, {  useState } from 'react';
import { FaBars } from "react-icons/fa6";
export default function NavBar() {
  const [nav,setNav]=useState(false);

  function showNavbar(){
    if(nav){
      setNav(false);
    }else{
      setNav(true)
    }
  }
  const navbar=[
    { key: 1, value: "home" },
    { key: 2, value: "about" },
    { key: 3, value: "projects" },
    { key: 4, value: "skills" },
    { key: 5, value: "contact" },
  ];

  const handleNavLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setNav(false);
  };
  return (
    <div className="flex bg-black w-full h-20 px-4 text-white fixed justify-between items-center ">
      <div>
        <h1 className='min-[601px]:text-5xl great-vibes-regular ml-2 max-[600px]:text-3xl '>Portfolio.</h1>
      </div>
      <ul className=' max-[600px]:hidden min-[601px]:flex'>
      {navbar.map((item) => (
  // eslint-disable-next-line react/jsx-key
  <li  key={item.key} onClick={() => handleNavLinkClick(item.value)} className='cursor-pointer px-4 capitalize font-medium text-gray500 hover:scale-105 hover:text-white duration-200'> {item.value}</li>))}
        
      </ul>
      <div className='navbar cursor-pointer max-[600px]:block min-[601px]:hidden max-[400px]:mr-12 min-[401px]:mr-2' >
      <FaBars size={30} onClick={showNavbar} />
      </div>
      { nav &&
      <div className='absolute max-[600px]:block min-[601px]:hidden w-[9.25rem] h-[14rem] bg-black flex flex-col top-[5.5rem] right-2  duration-200'>
      <ul className='flex flex-col text-center'>
      {navbar.map((item) => (
  
  
    <li key={item.key} onClick={() => handleNavLinkClick(item.value)} className='cursor-pointer mt-4 px-4 capitalize font-medium text-gray500 hover:scale-105 hover:text-white duration-200'> {item.value}</li>
  ))}
        
      </ul>
        </div>}
    </div>
  );
}

