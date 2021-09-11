import { useState } from 'react';
import Tab from './Tab';
import { motion } from 'framer-motion';
import { tabs } from '../data/tabs'
import { colors } from '../data/colors'
import BurgerMenuPart from './BurgerMenuPart';

const BurgerMenu = () => {

const [menuOpen, setMenuOpen] = useState(false)

const handleClick = () => {
    setMenuOpen(!menuOpen)
}

const menuVariant = {
    stop: {width: "15%", paddingTop:"15%", rotate: 0, borderRadius:"100%", transition:{duration:0.5}},
    rotate: {width: ["15%", "15%", "100%"], paddingTop:["15%", "15%", "100%"], rotate: [0, 90, 90], borderRadius:["100%", "100%", "10%"], transition:{duration:0.5}}
}

const colorsVariant = {
    stop: {gap: "0rem", transition:{duration:0.5}},
    rotate: {gap: "0rem", transition:{duration:0.2, delay:0.3}}
}

const tabVariant = {
    stop: {width: ["15%", "0%", "0%"] , opacity:[1, 0, 0], display:["flex", "flex", "none"], transition:{duration:0.5}},
    rotate: {width: "15%", display:"flex", opacity:1, transition:{duration:0.2, delay:0.3}}
}

    return (
        <nav className="fixed md:hidden top-0 text-green font-bold w-full h-20 px-4 z-50">
            <div className="py-4">
                <motion.div 
                className={`relative overflow-hidden`}
                style={{width:"15%", paddingTop:"15%", borderRadius:"100%"}}
                initial="stop"
                animate={menuOpen ? "rotate" : "stop"}
                variants={menuVariant}
                >
                    <button onClick={handleClick} className={`block absolute top-0 left-0 h-full w-full overflow-hidden`}>
                        <motion.div variants={colorsVariant} className={`w-full flex h-full bg-gray-900`}>
                            {colors.map((color, index) => 
                                <BurgerMenuPart key={index} color={color} index={index} menuOpen={menuOpen}/>
                            )}
                        </motion.div>
                    </button>
                </motion.div>

                <div className="ml-4 hidden md:inline">Paul Mouchel</div>
            </div>
            
        </nav>
    )
}

export default BurgerMenu;