import Colors from './Colors';
import Tab from './Tab';
import { tabs } from '../data/tabs';

const Navbar = () => {
    return (
        <nav className="hidden fixed top-0 text-green font-bold w-full h-20 md:flex justify-between items-center px-4 z-50">
            <div className="flex justify-between items-center">
                <div className="h-12 w-12 relative">
                    <Colors className="flex rounded-full overflow-hidden"/>
                </div>
                <div className="ml-4 inline">Paul Mouchel</div>
            </div>
            <ul className="flex">
                {tabs.map((tab, index) => 
                    <Tab key={index} path={tab.path}>{tab.text}</Tab>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;