import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineGithub,AiOutlineLinkedin,AiOutlineInstagram } from 'react-icons/ai'
const Hero = () => {

  const config ={
    subtitle:"I am a Front End developer",
    social :{
      github : "https://github.com/ajithyaasaf",
      linkedin : "https://www.linkedin.com/in/ajith-kannan-ab4175213/",
      instagram : "https://www.instagram.com/ajithkannan__/?igsh=MWF0MmEycGE0MWpl"
    }
  }
  return (
    <section className='md:flex-row flex flex-col  px-4 bg-slate-800 text-white  self-center justify-around' >
        <div className='md:w-1/2 flex flex-col md:self-center w-full'>
        <h1 className=' md:pl-20 pl-0 pt-4 h-full text-2xl md:text-4xl font-herofont'>H'i <br />I'm Ajith Kannan
        <p>{config.subtitle}</p>
        </h1>
        <div className='flex w-1/2 md:self-center pt-5 pb-4 gap-5 '>
        <a href={config.social.github}><AiOutlineGithub className=' size-6 hover:text-black cursor-pointer'/></a>
        <a href={config.social.linkedin}><AiOutlineLinkedin className='size-6 hover:text-black cursor-pointer'/></a>
        <a href={config.social.instagram}><AiOutlineInstagram className='size-6 hover:text-black cursor-pointer'/></a>
        
        </div>
      </div>    
        <img src={HeroImg}  className=' md:w-1/2 w-64'  alt="" />
    </section>
  )
}

export default Hero