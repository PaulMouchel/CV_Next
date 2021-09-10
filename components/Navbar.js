import { useState } from 'react';
import Colors from './Colors';
import Tab from './Tab';
import { motion } from 'framer-motion';

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false)

const handleClick = () => {
    setMenuOpen(!menuOpen)
}

const menuVariant = {
    stop: {rotate: 0},
    rotate: {rotate: 90}
}

    return (
        <nav className="fixed top-0 text-green font-bold w-full h-20 flex justify-between items-center px-4 z-50">
            <div className="flex justify-between items-center">
            <motion.div 
            className={`h-12 w-12 relative`}
            initial="stop"
            animate={menuOpen ? 'rotate' : 'stop'}
            variants={menuVariant}>
                <Colors className="hidden md:flex rounded-full overflow-hidden"/>
                <button onClick={handleClick} className={`block md:hidden absolute top-0 left-0 h-12 w-12 rounded-full`}>
                    <Colors className="rounded-full overflow-hidden"/>
                </button>
            </motion.div>
                <div className="ml-4 hidden md:inline">Paul Mouchel</div>
            </div>
            <ul className="flex">
                <Tab path="/">Home</Tab>
                <Tab path="/work">Travail</Tab>
                <Tab path="/about">A Propos</Tab>
                <Tab path="/cv">Mon CV</Tab>
            </ul>
        </nav>
    )
}

export default Navbar;