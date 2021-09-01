import Image from 'next/image'
import SectionTitle from "./SectionTitle";

const hobbies = [
    "bike",
    "climb",
    "coding",
    "run",
    "guitar",
    "hicking",
    "wakeboard",
    "travel"
]

const Hobbies = () => {
    return (
        <section >
            <SectionTitle>HOBBIES</SectionTitle>
            <div className="">
                {hobbies.map((hobbie, index) =>  
                <div key={index} className="inline m-2">
                    <Image
                        src={`/images/${hobbie}.jpg`}
                        height={50} 
                        width={50} 
                        alt={hobbie}
                    />
                </div>
                )}
            </div>
        </section>
    )
}

export default Hobbies;