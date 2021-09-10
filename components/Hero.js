import Image from 'next/image'
import { CgArrowDownR } from 'react-icons/cg'
import Section from './Section'
import Title from './Title'
import P from './P'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <Section className="gap-12">
            <div className="max-w-2xl text-left">
                <Title>Salut ! Moi c'est Paul.</Title>
                <P>Bienvenue sur mon porfolio! Je suis développeur Full Stack freelance et je vis sur l'île de la réunion.</P>
            </div>
            <div>
                <Image
                    src="/images/me.jpg" 
                    height={400} 
                    width={400} 
                    alt="Ma photo"
                    className="pic-shape"
                />
            </div>
            <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }} 
            className="absolute bottom-8 text-orange text-4xl">
                <a href="#work">
                    <CgArrowDownR/>
                </a>
            </motion.div>
        </Section>

    )
}

export default Hero;