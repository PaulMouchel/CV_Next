import Informations from "./Informations";

const Header = () => {
    return (
        <header className="h-64">
            <div>
                <h1 className="text-darkGreen text-6xl">PAUL MOUCHEL</h1>
                <h2 className="text-white text-2xl">DEVELOPPEUR FULL STACK</h2>
            </div>
            <Informations/>
        </header>
    )
}

export default Header;