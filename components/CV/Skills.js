import Image from 'next/image'
import SectionTitle from "./SectionTitle";
import { skills } from '../../data/skills';

const Skills = () => {
    return (
        <section >
            <SectionTitle>COMPÉTENCES</SectionTitle>
            <div>
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
        </section>
    )
}

export default Skills;