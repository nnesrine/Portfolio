import React from 'react'
import contactme from "./Mention-rafiki.png"
export default function Contact() {
  return (
    <div id='contact' className='bg-gradient-to-b from-gray800 to-black text-white w-full h-max'>
      <div className=' p-6 mx-auto flex flex-col  w-full h-full justify-center items-center'>
      <div className='flex   w-full flex-row justify-around items-center'>
          <div className='py-24'>
            <p className='text-4xl font-bold  inline border-b-4 border-gray500'>Contact</p>
            <p className='text-2xl mt-20'>Submit the form below </p>
          </div>
          <img src={contactme} alt=""  className='bg-transparent min-[601px]:size-64 max-[600px]:size-40' />
          </div>
          <form action="https://getform.io/f/pagxeorb" method='POST' className='flex flex-col min-[601px]:w-2/5  max-[600px]:w-10/12 gap-5 '>
            <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
            <input type='text' name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></input>
            <textarea type='text' name='message' rows={10}  className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white min-[601px]:mx-[12rem] bg-gradient-to-r from-indigo500 to-purple500 p-2  rounded-md font-bold hover:scale-110 duration-300'>Let's talk</button>
          </form>
          </div>
    </div>
  )
}
