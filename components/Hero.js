import Image from 'next/image'
import { CgArrowDownR } from 'react-icons/cg'
import Section from './Section'
import Title from './Title'
import P from './P'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <Section className="gap-4 md:gap-12 flex-col-reverse md:flex-row pb-12 md:pb-0 pt-4 md:pt-0">
            <div className="max-w-2xl text-left">
                <Title>Salut ! Moi c'est Paul.</Title>
                <P>Bienvenue sur mon porfolio! Je suis développeur Full Stack freelance et je vis sur l'île de la réunion.</P>
            </div>
            <div className="h-48 md:h-96 w-48 md:w-96">
                <Image
                    src="/images/me.jpg" 
                    height={384} 
                    width={384} 
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