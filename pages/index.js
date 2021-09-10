import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WorkHistory from '../components/WorkHistory'
import Stack from '../components/Stack'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-gray-900">
      <Head>
        <title>Paul Mouchel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar activeTab={"home"}/> */}
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        
        <Hero/>
        <WorkHistory/>
        <Stack/>
        <About/>
        <Contact/>
      </main>
    </div>
  )
}
