import React from 'react'
import projectImage1 from '../assets/project1.png'
import projectImage2 from '../assets/project2.png'
import projectImage3 from '../assets/project3.png'
const Projects = () => {
   const config={
      projects:[
         {
            image: projectImage1,
            description:'This Social Media Website Build Using HTML,CSS,React js,AXIOS, and CRUD opertions.',
            link:'https://github.com/ajithyaasaf/React_social_media_app'  
         },
         {
            image: projectImage2,
            description:'This is Dental-care website Build for client during Internship using HTML, CSS, javascript, Bootstraps.',
            link:'https://dentacareintern.web.app/'
         },
         {
            image:projectImage3,
            description:'This is a Admin DashBoard for DentalCare Hospital build using JavaScript,ReactJs,BootStrap,ExpressJs,Firebase.',
            link:'https://hospital-management-23dbf.web.app/'
         }
      ]
   }
  return (
     <section id="project" className='w-full h-[1000px] md:max-h-[500px] bg-slate-800 flex flex-col justify-center items-center'>
        <h1 className='w-[130px] text-center relative bottom-5 mx-auto text-white text-3xl font-semibold border-b-4 border-[rgb(255,255,255)] '>Projects</h1>

        <div className='flex flex-col self-center  '>
        <div className='md:flex w-full h-full  justify-center  md:gap-5'>

        {config.projects.map((project, index) => (
    <div key={index} className='relative md:w-[400px] md:h-[250px] w-[300px] 
    h-[200px] mt-5'>
        <img src={project.image} alt="" className=' md:w-[400px] md:h-[250px] w-[300px] 
    h-[200px]  box-content'/>
        <div className='projecthover'>
            {project.description}
            <div className='flex justify-center items-center pt-3'>
                <a href={project.link} className='btn'>View Now</a>
            </div>
        </div>
    </div>
))}

        
        </div>
        </div>
     </section>
  )
}

export default Projects

