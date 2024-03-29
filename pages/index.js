import Particles from 'react-particles';
import { useCallback, useState, useEffect, useRef } from 'react';
import ParticleOptions from '../utils/particles';
import { loadFull } from 'tsparticles';
import ExportProjects from '../utils/exportProjects';
import ProjectCard from '../components/projectCard';

export default function Home() {
   const [visibility, setVisibility] = useState('opacity-100');
   const [cursor, setCursor] = useState('hover:cursor-select');
   const [projects, setProjects] = useState([]);
   const projectRef = useRef(null);
   const profileImage = 'https://i.imgur.com/17rQx5Q.jpg';
   const portfolioLink = 'https://docs.google.com/gview?url=https://github.com/wongm3079/wongm3079.github.io/raw/main/Michael_Elliot_Wong_Resume_2023.pdf';

   useEffect(() => {
      window.onscroll = () => {
         if (window.pageYOffset <= 5) {
            setVisibility('opacity-100');
            setCursor('hover:cursor-select');
         } else {
            setVisibility('opacity-0');
            setCursor('hover:cursor-default');
         }
      }

      setProjects(ExportProjects());
   }, []);

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

 return (
    <div>
       <Particles 
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticleOptions()}
       />
       <div className='flex flex-col justify-center text-center mt-auto h-screen static inset-x-0'>
         <div className="flex flex-col justify-center text-center">
            <div className='flex justify-center mb-4'>
               <img className='rounded-full h-60 w-60 lg:h-32 lg:w-32 2xl:h-60 2xl:w-60 ring-2 ring-black' src={profileImage} alt='pfp'></img>
            </div>
            <h1 className='font-inter text-5xl 2xl:text-6xl'>Michael Wong</h1>
            <h2 className='font-thin mt-2 text-lg 2xl:text-xl'>B.E.Sc. Computer Engineering, 2024</h2>
            <h3 className='font-thin text-md 2xl:text-lg'>Western University</h3>
         </div>
         <div className='flex flex-row gap-4 justify-center mt-8'>
            <a target='_blank' rel='noreferrer' href={portfolioLink}><button className='px-4 py-3 lg:py-2 2xl:py-3 bg-white text-black rounded-lg hover:bg-gray-200 shadow-md shadow-black ease-in duration-150 transition-all'>Resume</button></a>
         </div>
         <div className='flex flex-row justify-center mt-10 gap-4'>
            <a className='hover:animate-pulse' target='_blank' rel='noreferrer' href='https://github.com/wongm3079'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
               <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg></a>
            <a className='hover:animate-pulse' target='_blank' rel='noreferrer' href='https://linkedin.com/in/wongm3079'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
               <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg></a>
            <a className='hover:animate-pulse' href='mailto:wongm3079@gmail.com'>
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
               </svg>
            </a>
         </div>
         <div className='flex flex-col items-center mt-14'>
            <button onClick={() => projectRef.current.scrollIntoView()} className={`animate-bounce ${cursor} ${visibility} ease-linear transition-opacity duration-200 relative sm:top-1/4`}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                     <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg></button>
         </div>
       </div>
       <div className='flex flex-col justify-center items-center align-center pt-8' ref={projectRef}>
         <h2 className='text-5xl font-inter'>Porfolio</h2>
         <div className='flex flex-col justify-center items-center gap-4 mt-12 mb-96'>
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
       </div>
    </div>
 )
}