import Informations from "./Informations";
import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="px-2 md:px-32 lg:px-64 xl:px-96 pt-4 flex flex-col md:flex-row justify-between">
            <div>
                <h1 className="text-darkGreen text-5xl font-bold">PAUL MOUCHEL</h1>
                <h2 className="text-darkGreen md:text-white text-xl font-bold">DEVELOPPEUR FULL STACK</h2>
                <div className="text-gray-600 text-4xl md:text-2xl mb-4">
                    <a href="https://www.linkedin.com/in/paul-mouchel-54875216a/" target="_blank" className="mr-3 md:mr-1">
                        <FaLinkedin className="inline"/>
                    </a>
                    <a href="https://github.com/PaulMouchel" target="_blank" className="mr-3 md:mr-1">
                        <FaGithub className="inline"/>
                    </a>
                    <a href="/pdf/cv_paul_mouchel_dev_full_stack.pdf" download>
                        <FaFilePdf className="inline"/>
                    </a>
                </div>  
            </div>
            <Informations/>
        </header>
    )
}

export default Header;