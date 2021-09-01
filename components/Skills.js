import Image from 'next/image'
import SectionTitle from "./SectionTitle";

const skills = [
    "bike",
    "climb",
    "coding",
    "run",
    "guitar",
    "hicking",
    "wakeboard",
    "travel"
]

const Skills = () => {
    return (
        <section >
            <SectionTitle>COMPÉTENCES</SectionTitle>
            <div className="">
                {skills.map((skill, index) =>  
                <div key={index} className="inline m-2">
                    <Image
                        src={`/images/${skill}.jpg`}
                        height={50} 
                        width={50} 
                        alt={skill}
                    />
                </div>
                )}
            </div>
        </section>
    )
}

export default Skills;