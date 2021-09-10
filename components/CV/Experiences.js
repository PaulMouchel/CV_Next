import SectionTitle from "./SectionTitle";
import Experience from "./Experience";

const experiences = [
    {
        name:"Développeur Full Stack freelance",
        date:"Depuis Mai 2021",
        description:[
            "Réalisation d’applications web"
        ]
    },
    {
        name:"Automaticien / Chef de projet",
        place:"Société ACTEMIUM, Groupe Vinci - Rennes (35)",
        date:"Octobre 2011 - Juin 2021",
        description:[
            "Programmation d’automates de sécurité Siemens step7 et TIA Portal, Schneider Unity.", 
            "Paramétrage et mise en service de variateurs.",
            "Rédaction de l’analyse fonctionnelle, programmations d’automates, échanges techniques avec les clients, mise en service, suivi de projet, supervision de l’équipe d’automaticiens (selon projets)"
        ]
    },
    {
        name:"Technicien stagiaire en automatisme",
        place:"Société ASPROD - Granville (50)",
        date:"Mars à Juillet 2011 : 5 mois, Avril à Juin 2010 : 2 mois et demi",
        description:[
            "Programmation, étude électrique, raccordement électrique, mise en service."
        ]
    }
]

const Eperiences = () => {
    return (
        <>
            <SectionTitle>EXPERIENCES PROFESSIONNELLES</SectionTitle>
            {experiences.map((experience, index) =>
            <Experience key={index} {...experience}/>)}
        </>
    )
}

export default Eperiences;