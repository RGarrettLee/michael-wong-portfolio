import Link from 'next/link';
import { useState } from 'react';
import ProjectCard from '../components/projectCard';

export default function Portfolio() {
    const [projects] = useState([
        {
            'name': 'NAS',
            'tags': ['FreeNas', 'Linux', 'PC Building'],
            'desc': 'Configured and built a PC with power-efficient parts designed to be active 24/7'
        },
        {
            'name': 'COVID Safety Smart Room Controller',
            'tags': ['C', 'ARMv7'],
            'desc': 'Developed a solution to track and maintain the number of occupants in a room to adhere to COVID safety guidelines'
        },
        {
            'name': 'Error Correcting Transmitter and Receiver',
            'tags': ['Quartus Prime', 'VHDL'],
            'desc': 'Implemented a PISO shift register to transmit a 20-bit encoded message to a SIPO shift register'
        },
        {
            'name': 'Multi-FA Security Lock',
            'tags': ['Arduino', 'Soldering', 'Breadboard Prototyping', 'EAGLE PCB'],
            'desc': 'Designed a prototype utilizing actuators and sensors to improve the standard design of a digital safe'
        },
        {
            'name': 'Project Retina',
            'tags': ['Java', 'Arduino', 'Onshape'],
            'desc': 'Developed a system to improve quality of life for clients with severe intellectual disabilities'
        }
    ])

    return (
        <>
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