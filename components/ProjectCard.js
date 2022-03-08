import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ project }) => {
    const { fields } = project
    const { title, description, thumbnail, slug } = fields

    return (
        <Link href={`/projects/${slug}`}>
            <a>
                <div className='group relative w-full h-80 cursor-pointer'>
                    <Image src={`https:${thumbnail.fields.file.url}`} alt={`Image pour le site : ${title}`} layout='fill' objectFit='cover' className='transition ease-in-out duration-500 group-hover:scale-105 group-hover:opacity-30'/>
                    <div className='px-4 transition duration-500 flex flex-col opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 items-center justify-center text-white font-bold'>
                        <h2 className='text-xl'>{ title }</h2>
                        <p className='text-center text-sm'>{ description }</p>
                    </div>
                </div>
            </a>
        </Link>

    )
}

export default ProjectCard;