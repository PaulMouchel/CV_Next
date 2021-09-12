import Image from 'next/image'
import { CgArrowDownR } from 'react-icons/cg'
import Section from './Section'
import Title from './Title'
import P from './P'
import { motion } from 'framer-motion'
import { useScrollYPosition } from 'react-use-scroll-position';
import useWindowDimensions from '../hooks/useWindowsDimentions'

const Hero = () => {
    const scrollY = useScrollYPosition();
    const { height, width } = useWindowDimensions();

    const scrollToWork = () => {
        window.scrollTo(0,height)
    }

    const getOpacity = () => {
        return 1 - (scrollY/height)
    }

    return (
        <Section className="gap-4 md:gap-12 flex-col-reverse md:flex-row pb-12 md:pb-0 pt-4 md:pt-0">
            <div className="max-w-2xl text-left">
                <Title>Hello !</Title>
                <Title>Moi c'est Paul.</Title>
                <P>Je suis développeur Full Stack.</P>
                <P>Bienvenue sur mon porfolio.</P>
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
                <a onClick={scrollToWork}>
                    <CgArrowDownR style={{opacity: getOpacity()}}/>
                </a>
            </motion.div>
        </Section>

    )
}

export default Hero;