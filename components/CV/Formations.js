import SectionTitle from "./SectionTitle";
import Formation from "./Formation";

const formations = [
    {
        date:"2019 à 2021",
        title:"Auto-formation aux technologies du web",
        description:" Via Youtube, Udemy, blogs"
    },
    {
        date:"2019",
        title:"The Hacking Project",
        description:" Bootcamp en peer-learning : formation intensive au développement web, aux programmes HTML, CSS, JS, Git & Github, SQL, Ruby on Rails",
        link: "thehackingproject.org"
    },
    {
        date:"2011",
        title:"Licence professionnelle Automatique et Informatique Industrielle",
        description:", spécialité Systèmes Informatiques Embarqués UFR de science de Caen"
    },
    {
        date:"2010",
        title:"DUT Génie Électrique et Informatique Industrielle",
        description:", IUT de Rennes"
    },
    {
        date:"2008",
        title:"Baccalauréat scientifique",
        description:" option SVT - mention Assez bien"
    }
]

const Formations = () => {
    return (
        <>
            <SectionTitle>FORMATION</SectionTitle>
            {formations.map((formation, index) =>
            <Formation key={index} {...formation}/>)}
        </>
    )
}

export default Formations;