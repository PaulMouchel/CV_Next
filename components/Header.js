import Informations from "./Informations";

const Header = () => {
    return (
        <header className="px-2 md:px-32 lg:px-64 xl:px-96 pt-4 flex justify-between">
            <div>
                <h1 className="text-darkGreen text-4xl">PAUL MOUCHEL</h1>
                <h2 className="text-white text-xl">DEVELOPPEUR FULL STACK</h2>
            </div>
            <Informations/>
        </header>
    )
}

export default Header;