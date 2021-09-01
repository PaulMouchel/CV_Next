import About from "./About";
import SectionTitle from "./SectionTitle";
import Experiences from "./Experiences";
import Languages from "./Languages";
import Assets from "./Assets";
import Formations from "./Formations";

const Body = () => {
    return (
        <body className="mx-96">
            <About/>
            <Experiences/>
            <Languages/>
            <SectionTitle>HOBBIES</SectionTitle>
            <SectionTitle>COMPÉTENCES</SectionTitle>
            <Assets/>
            <Formations/>
        </body>
    )
}

export default Body;