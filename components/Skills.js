import Image from 'next/image'
import SectionTitle from "./SectionTitle";

const skills = [
    {
        name:"tailwind",
        height:30,
        width:150,
        transform:""
    },
    {
        name:"js",
        height:40,
        width:40,
        transform:""
    },
    {
        name:"git",
        height:40,
        width:40,
        transform:""
    },
    {
        name:"css",
        height:40,
        width:40,
        transform:""
    },
    {
        name:"node",
        height:45,
        width:75,
        transform:""
    },
    {
        name:"firebase",
        height:30,
        width:100,
        transform:""
    },
    {
        name:"react",
        height:40,
        width:40,
        transform:""
    },
    {
        name:"vue",
        height:40,
        width:48,
        transform:""
    },
    {
        name:"postgre",
        height:40,
        width:40,
        transform:""
    },
    {
        name:"rails",
        height:42,
        width:110,
        transform:""
    },
    {
        name:"html",
        height:40,
        width:40,
        transform:""
    },
    {
        name:"express",
        height:40,
        width:120,
        transform:""
    },
    {
        name:"bootstrap",
        height:50,
        width:50,
        transform:""
    },
    
    {
        name:"next",
        height:45,
        width:75,
        transform:""
    }
]

const Skills = () => {
    return (
        <section >
            <SectionTitle>COMPÉTENCES</SectionTitle>
            <div className="">
                {skills.map((skill, index) =>  
                <div key={index} className={`inline m-2 ${skill.transform}`}>
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