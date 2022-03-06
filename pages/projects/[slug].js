import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from "@contentful/rich-text-types";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOCKEN,
})

const dtrOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        node.data?.target?.fields?.file?.details?.image?.width === 21 && node.data?.target?.fields?.file?.details?.image?.height === 21 ?
        <div className='flex items-center gap-2'>
            <img
            src={node.data?.target?.fields?.file?.url}
            alt={node.data?.target?.fields?.title}
            className="my-0"
            />
            <span>{node.data?.target?.fields?.title}</span>
        </div>
        :
        <img
          src={node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
        />
      ),
    },
  };

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

    if (!project) return <p>Loading...</p>

    const {thumbnail, content} = project.fields
    // const formatedDate = useFormatedDate(date)
console.log(content)
    return (
        <main>
            <div className="py-20 max-w-[900px] m-auto">
                <div className='w-full'>
                    <div className="h-72 relative rounded-lg overflow-hidden mb-16">
                        <Image 
                        src={"https:" + thumbnail.fields.file.url}
                        layout="fill"
                        objectFit="cover"
                        />
                    </div>
                    <div className="prose prose-invert">
                        {documentToReactComponents(content, dtrOptions)}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Project