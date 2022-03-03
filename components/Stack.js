import Image from "next/image";
import Section from "./Section";
import Title from "./Title";
import P from './P'
import { skills } from "../data/skills";

const Stack = () => {
    return (
        <Section className="flex-col">
            <Title>Mes outils</Title>
            <P className="max-w-lg">Les différentes technologies que j'utilise :</P>
            <div className="max-w-lg bg-gray-100 pic-shape px-12 md:px-20 py-12 md:py-16 m-8">
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
            </div>
        </Section>

    )
}

export default Stack;