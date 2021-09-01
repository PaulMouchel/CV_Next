import About from "./About";
import Experiences from "./Experiences";
import Languages from "./Languages";
import Hobbies from "./Hobbies";
import Assets from "./Assets";
import Formations from "./Formations";
import Skills from "./Skills";
import { motion } from 'framer-motion'

const Body = () => {
    return (
        <main className="mx-2 md:mx-32 lg:mx-64 xl:mx-96 grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-18">
            <motion.div
            initial={{y:"10vh", opacity:0}}
            animate={{y:0, opacity:1
            }}
            transition={{duration:0.5, delay: 0.2}}>
                <About/>
                <Languages/>
                <Assets/>
                <Hobbies/>
            </motion.div>
            <motion.div
            initial={{y:"10vh", opacity:0}}
            animate={{y:0, opacity:1
            }}
            transition={{duration:0.5, delay: 0.4}}>
                <Experiences/>
            </motion.div>
            <motion.div
            initial={{y:"10vh", opacity:0}}
            animate={{y:0, opacity:1
            }}
            transition={{duration:0.5, delay: 0.6}}>
                <Skills/>
                <Formations/>
            </motion.div>
            
            
            
        </main>
    )
}

export default Body;