import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';
import { loadFull } from 'tsparticles';
import ProjectCard from '../components/projectCard';
import Particles from 'react-particles';
import ParticleOptions from '../utils/particles';
import ExportProjects from '../utils/exportProjects';

export default function Portfolio() {
    const [projects, setProjects] = useState([])

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async container => {
        await console.log(container);
      }, []);

      useEffect(() => {
        setProjects(ExportProjects());
      }, []);

    return (
        <>
            <Particles 
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticleOptions()}
            />
            <div className='flex flex-col items-center mt-auto'>
                <h1 className='text-center text-2xl font-bold'>My Portfolio</h1>
                <Link href='/'><button className='mt-4 bg-white px-4 py-2 text-black rounded-lg shadow-md shadow-black hover:opacity-75 ease-in duration-150 transition-all'>Home</button></Link>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 mt-8'>
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </>
    )
}