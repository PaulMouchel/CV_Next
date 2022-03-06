import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOCKEN,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({ 
        content_type: "project" 
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })
  
    return {
        paths,
        fallback: true
    }
}
  
export const getStaticProps = async ({ params }) => {
    const { items } = await client.getEntries({
        content_type: 'project',
        'fields.slug': params.slug
    })
  
    if(!items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
  
    return {
        props: { project: items[0] },
        revalidate: 1
    }
}

const Project = ({ project }) => {
    // if(!project) return <SkeletonNewsArticle/>

    const {title, thumbnail, content} = project.fields
    // const formatedDate = useFormatedDate(date)

    return (
        <main className="py-32 max-w-[1200px] m-auto">
            <div className='w-full'>
                {title}
                <div className="h-72 relative rounded-lg overflow-hidden">
                    <Image 
                    src={"https:" + thumbnail.fields.file.url}
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                <div className="article-content">
                    {documentToReactComponents(content)}
                </div>
            </div>
            
        </main>
    )
}

export default Project