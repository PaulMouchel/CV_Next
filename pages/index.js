import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WorkHistory from '../components/WorkHistory'
import Stack from '../components/Stack'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-900">
      <Head>
        <title>Paul Mouchel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        
        <Hero/>
        <WorkHistory/>
        <Stack/>
        <About/>
        
        <h1>Portfolio à venir</h1>
        <h1 className="text-6xl font-bold">
          Voir mon{' '}
          <Link href='/cv'>
            <a className="text-darkGreen">
              CV
            </a>
          </Link>
        </h1>
      </main>

      <Footer/>
    </div>
  )
}
