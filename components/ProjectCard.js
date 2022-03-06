import Image from 'next/image'

const ProjectCard = () => {
    return (

            <div className='group relative w-full h-80 cursor-pointer'>
                <Image src='/images/projects/cse-entreprise.JPG' layout='fill' objectFit='cover' className='transition ease-in-out duration-500 transform group-hover:scale-105 group-hover:opacity-40'/>
                <div className='px-4 transition duration-500 flex flex-col opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-center justify-center text-white font-bold'>
                    <h2 className='text-xl'>CSE d'entreprise</h2>
                    <p className='text-center text-sm'>Application web pour un comité d'entreprise</p>
                </div>
            </div>

    )
}

export default ProjectCard;