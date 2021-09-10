import Link from 'next/link'
import Colors from './Colors';
import Tab from './Tab';

const Navbar = () => {
    return (
        <nav className="fixed top-0 text-green font-bold w-full h-20 flex justify-between items-center px-4 z-50">
            <div className="flex justify-between items-center">
            <div className="h-12 w-12">
                <Colors className="rounded-full overflow-hidden"/>
            </div>
                <div className="ml-4">Paul Mouchel</div>
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