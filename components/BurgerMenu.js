import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../data/colors'
import BurgerMenuPart from './BurgerMenuPart';
import useWindowDimensions from '../hooks/useWindowDimention'

const BurgerMenu = () => {

const [menuOpen, setMenuOpen] = useState(false)
const { height, width } = useWindowDimensions()

const portrait = height >= width

const widthWithPadding = width - 32
const heightWithPadding = height - 32
let menuWidthOpen = portrait ? widthWithPadding : heightWithPadding
menuWidthOpen = menuWidthOpen > 400 ? 400 : menuWidthOpen

const handleClick = () => {
    setMenuOpen(!menuOpen)
}

const menuVariant = {
    stop: {width: 52, paddingTop:52, rotate: 0, borderRadius:"100%", transition:{duration:0.5}},
    rotate: {width: [52, 52, menuWidthOpen], paddingTop:[52, 52, menuWidthOpen], rotate: [0, 90, 90], borderRadius:["100%", "100%", "10%"], transition:{duration:0.5}}
}

const colorsVariant = {
    stop: {gap: "0rem", transition:{duration:0.5}},
    rotate: {gap: "0rem", transition:{duration:0.2, delay:0.3}}
}

const bgVariant = {
    stop: {opacity: 0, transition:{duration:0.7}},
    rotate: {opacity: 0.9, transition:{duration:0.7}},
    exit: {opacity: 0, transition:{duration:0.7}}
}

    return (
        <>
            <nav className="fixed md:hidden top-0 text-green font-bold w-full h-20 px-4 z-50">
                <div className="py-4" style={{width: menuWidthOpen}}>
                    <motion.div 
                    className={`relative overflow-hidden`}
                    initial="stop"
                    animate={menuOpen ? "rotate" : "stop"}
                    variants={menuVariant}
                    >
                        <button onClick={handleClick} className={`block absolute top-0 left-0 h-full w-full overflow-hidden`}>
                            <motion.div variants={colorsVariant} className={`w-full flex h-full `}>
                                {colors.map((color, index) => 
                                    <BurgerMenuPart key={index} color={color} index={index} menuOpen={menuOpen}/>
                                )}
                            </motion.div>
                        </button>
                    </motion.div>
                </div>
            </nav>
            <AnimatePresence>
                {menuOpen &&            
                    <motion.nav
                    onClick={handleClick}
                    initial="stop"
                    animate="rotate"
                    exit="exit"
                    variants={bgVariant}
                    className="h-screen w-screen fixed bg-gray-900 z-40"
                    />
                }
            </AnimatePresence>
        </>
    )
}

export default BurgerMenu;