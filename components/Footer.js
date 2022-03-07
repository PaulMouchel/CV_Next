import Colors from "./Colors";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center w-full gap-2 py-2 mb-4 print:hidden">
            <div className="w-64 h-2 mb-4">             
                <Colors/>
            </div>
            
            <p className="text-gray-100 text-lg">Paul Mouchel</p>
            <p className="text-gray-100 text-lg">2021</p>
            <div  className="text-gray-400 text-4xl mb-2">
                <a href="https://www.linkedin.com/in/paul-mouchel-54875216a/" target="_blank" className="mx-2 hover:text-white transition-all">
                    <FaLinkedin className="inline"/>
                </a>
                <a href="https://github.com/PaulMouchel" target="_blank" className="mx-2 hover:text-white transition-all">
                    <FaGithub className="inline"/>
                </a>
            </div>
            
      </footer>
    )
}

export default Footer;