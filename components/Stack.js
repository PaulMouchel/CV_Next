import Image from "next/image";
import Section from "./Section";
import Title from "./Title";
import P from './P'
import { skills } from "../data/skills";
import TvShape from "./TvShape";

const Stack = () => {
    return (
        <Section className="flex-col">
            <Title>Mes outils</Title>
            <P className="max-w-lg">Les différentes technologies que j'utilise :</P>
            <TvShape>
                {skills.map((skill, index) =>  
                    <div key={index} className={`inline m-2`}>
                        <Image
                            src={`/images/${skill.name}.png`}
                            height={skill.height} 
                            width={skill.width} 
                            alt={skill.name} 
                        />
                    </div>
                )}
            </TvShape>
        </Section>
    )
}

export default Stack;