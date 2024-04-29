import React from 'react';
import ResumeImg from '../assets/resume.jpg';


const Resume = () => {
  return (
    <section id='resume' className='md:flex md:flex-row md:w-full h-[80vh] flex flex-col justify-center items-center bg-slate-900'>
      <div className='md:w-1/2 w-full flex justify-center md:justify-end items-center'>
        <img src={ResumeImg} alt="" className='max-w-[60%] h-auto mx-4' />
      </div>
      <div className='md:w-1/2 w-full bg-slate-900 flex flex-col justify-center items-center'>
        <h1 className='md:pt-3 pt-2 text-white w-32 border-b-4 border-[#3e4c59] 
        text-center md:text-2xl text-xl self-center'>Resume</h1>
        <div className=' flex-row flex '>
        <p className='text-white text-pretty text-ellipsis md:text-xl text-lg pt-2 text-justify px-5 pb-4'>
          You can download my Resume here.  
          <a className="btnresume relative top-3 left-5 md:top-0 md:left-0 " href="https://drive.google.com/file/d/19yBbeOdj0x2NMz51ym_zQ35p84Zc9m3z/view?usp=sharing" >Download</a>
        </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;

