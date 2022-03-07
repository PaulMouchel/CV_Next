import Head from 'next/head'
import Hero from '../components/Hero'
import WorkHistory from '../components/WorkHistory'
import Stack from '../components/Stack'
import About from '../components/About'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="flex flex-col justify-center bg-gray-900">
      <Head>
        <title>Paul Mouchel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-4 text-center">
        <Hero/>
        <WorkHistory/>
        <Stack/>
        <About/>
        <Contact/>
      </main>
    </motion.div>
  )
}
