import SectionTitle from "./SectionTitle";

const about = "Passionné d’informatique depuis toujours, j’ai décidé en 2019, après 10 ans dans l'automatisme industriel et un voyage en Asie de plusieurs mois, de me former et de relever un nouveau challenge en devenant dévelopeur full stack."

const About = () => {
    return (
        <>
            <SectionTitle>A PROPOS</SectionTitle>
            <p>{about}</p>
        </>
    )
}

export default About;