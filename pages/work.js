import Head from 'next/head'
import { motion } from 'framer-motion'

const work = () => {
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


        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div className="text-white">En construction</div>

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