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
        <section>
            <SectionTitle>HOBBIES</SectionTitle>
            <div className="px-6">
                {hobbies.map((hobbie, index) =>  
                <div key={index} className="inline-block m-2 relative p-5 print:p-4">
                    <Image
                        src={`/images/hobbies/${hobbie}.png`}
                        layout='fill'
                        objectFit='contain'
                        alt={hobbie}
                    />
                </div>
                )}
            </div>
        </section>
    )
}

export default Hobbies;