import Navbar from './Navbar';
import BurgerMenu from './BurgerMenu';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <Navbar/>
            <BurgerMenu/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;