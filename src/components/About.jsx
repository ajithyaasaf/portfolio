import React from 'react';
import AboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id='about' className='md:flex md:flex-row md:w-full h-full bg-slate-900'>
      <div className='md:w-1/2 w-full flex justify-center items-center'>
        <img src={AboutImg} alt="" className='max-w-[90%] h-auto' />
      </div>
      <div className='md:w-1/2 w-full bg-slate-900 flex flex-col'>
        <h1 className='md:pt-3 pt-2 text-white w-32 border-b-4 border-[white] text-center md:text-2xl text-xl self-center'>About me</h1>
        <p className='text-white text-pretty text-ellipsis md:text-xl text-lg pt-2 text-justify px-5 pb-4'>As a dedicated front-end developer, I bring a wealth of hands-on experience in crafting engaging user experiences. <br /><br />Proficient in HTML, CSS, and JavaScript, I thrive on translating design concepts into responsive web applications. My expertise extends to frameworks like React and tools such as Tailwind CSS, ensuring efficient development and sleek interfaces. With a keen eye for detail honed through Figma, I excel in creating user-friendly designs. Leveraging Firebase, I build scalable solutions while continuously refining my skills as a self-taught developer.<br /><br /> Committed to collaboration, I contribute actively as a team player, delivering simple and efficient solutions to meet project objectives.</p>
      </div>
    </section>
  );
};

export default About;
