import Head from 'next/head'
import { motion } from 'framer-motion'

const about = () => {
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
            {/* <div className="text-white">Hobbies et passion</div>
            <div className="text-white">Voyage</div>
            <div className="text-white">Pourquoi la réunion ?</div> */}
        </main>

        </motion.div>
    )
  }

export default about