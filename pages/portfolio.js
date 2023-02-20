import Link from 'next/link';

export default function Portfolio() {
    return (
        <>
            <div className='flex flex-col items-center mt-96'>
                <h1 className='text-center text-2xl font-bold'>Portfolio coming soon!</h1>
                <Link href='/'><button className='mt-4 bg-white px-4 py-2 text-black rounded-lg shadow-md shadow-black hover:bg-gray-200 ease-in duration-150 transition-all'>Home</button></Link>
            </div>
        </>
    )
}