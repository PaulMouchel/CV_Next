import Header from '../components/CV/Header'
import Body from '../components/CV/Body'
import Footer from '../components/CV/Footer'
import { motion } from 'framer-motion'

const cv = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="min-h-screen flex flex-col justify-between bg-white">
            <Header/>
            <Body/>
            <Footer/>
        </motion.div>
    )
  }

export default cv