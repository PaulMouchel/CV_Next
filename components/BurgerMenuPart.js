import Tab from './Tab';
import { motion } from 'framer-motion';
import { tabs } from '../data/tabs'

const BurgerMenuPart = ({color, index, menuOpen}) => {

    const tabVariant = {
        stop: {width: ["15%", "0%", "0%"] , opacity:[1, 0, 0], display:["flex", "flex", "none"], transition:{duration:0.5}},
        rotate: {width: "15%", display:"flex", opacity:1, transition:{duration:0.2, delay:0.3}}
    }

    return (
        <>
            <div className={`bg-${color} w-1/5 h-full flex items-center justify-center`}/>
            {tabs[index] && 
                <motion.div variants={tabVariant} className="w-0 h-full flex items-center justify-center">
                    {menuOpen &&
                        <Tab 
                        path={tabs[index].path} 
                        className="w-full h-full text-lg font-bold text-gray-100 transform  -rotate-180" 
                        style={{ writingMode:"vertical-rl" }}>
                            {tabs[index].text}
                        </Tab>
                    }
                </motion.div>
            }
        </>
    )
}

export default BurgerMenuPart;