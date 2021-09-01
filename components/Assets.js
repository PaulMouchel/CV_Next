import SectionTitle from "./SectionTitle";

const assets = [
    "Bonne capacité d’adaptation",
    "Grande autonomie",
    "Travail d’équipe",
    "Force de proposition",
    "Autodidacte passionné de code "
]

const Assets = () => {
    return (
        <>
            <SectionTitle>ATOUTS</SectionTitle>
            <ul>
                {assets.map((asset, index) =>
                <li key={index}>{asset}</li>)}
            </ul>
        </>
    )
}

export default Assets;