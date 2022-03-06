import Head from 'next/head'
import { motion } from 'framer-motion'
import { createClient } from 'contentful'
import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOCKEN
    })
  
    const projects = await client.getEntries({ content_type:'project'})
  
    return {
        props: {
            projects: projects.items.sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date))
        },
        revalidate: 1
    }
}

const work = ({ projects }) => {

    console.log(projects)
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col justify-center bg-gray-900 my-auto">
        <Head>
            <title>Paul Mouchel</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>


        <main className="py-32">
            <h1 className="text-white text-center text-4xl my-12">Travaux récents</h1>
            <div className='grid grid-cols-3 gap-12 max-w-[1200px] m-auto'>
                { projects.map((project, index) => 
                    <ProjectCard/>
                )}
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                
            </div>
            
            {/* <div className="text-white">Apprentissage</div>
            <div className="text-white">C DUT</div>
            <div className="text-white">C# LP</div>
            <div className="text-white">Automatismes</div>
            <div className="text-white">2019 THP</div>
            <div className="text-white">Udemy</div>
            <div className="text-white">Chaines youtube : grafikart, net ninja, web dev simplified</div>
            <div className="text-white">Chaines youtube : Mike codeur nomade, captain dev, harry jmg</div>

            <div className="text-white">projets</div>
            <div className="text-white">TRY'P</div>
            <div className="text-white">CSE</div>
            <div className="text-white">EDIA</div>
            <div className="text-white">Portfolio</div> */}
        </main>

        </motion.div>
    )
  }

export default work