import React from 'react'

export default function About() {
  return (
    <div id='about' className='w-full h-max bg-gradient-to-b from-black to-gray800 text-white  '>
      <div className='max-w-screen-lg p-6  mx-auto flex flex-col justify-center align-middle w-full h-full'>
        <div className='pb-8 '>
          <p className='text-4xl font-bold  inline border-b-4 border-gray500'>About</p>
        </div>
        <div className='text-xl mt-20'>
          <p> <span className='roboto-flex text-xl'>Curious and eager to tackle complex challenges</span>, I am a front-end developer and software engineer dedicated to continuous learning and skill improvement. My passion for exploring new technologies and mastering industry best practices drives me to deliver cutting-edge, efficient, and reliable applications.</p>
          <br/>
          <p>I have professional experience in web technologies, including <span className='roboto-flex text-xl'>HTML5</span>, <span className='roboto-flex text-xl'>CSS3</span>, <span className='roboto-flex text-xl'>JavaScript</span>, <span className='roboto-flex text-xl'>ReactJS</span>, and CSS frameworks such as <span className='roboto-flex text-xl'>TailwindCSS</span> and  <span className='roboto-flex text-xl'>materialUI</span>—also, <span className='roboto-flex text-xl'>git</span> and <span className='roboto-flex text-xl'>GitHub</span>.</p>
          <br/>
          <p>I enjoy <span className='roboto-flex text-xl'>problem-solving</span>, combining creative thinking with technical skills to develop innovative solutions. I thrive on picking up new skills and integrating them into my projects.</p>
          <br/>
          <p>I am excited to bring my skills and enthusiasm to your team and contribute to building amazing digital experiences together, so send me a quick email, and let's connect.</p>
        </div>
      </div>
    </div>
  )
}
