import About from "./About";
import Experiences from "./Experiences";
import Languages from "./Languages";
import Hobbies from "./Hobbies";
import Assets from "./Assets";
import Formations from "./Formations";
import Skills from "./Skills";

const Body = () => {
    return (
        <main className="mx-2 md:mx-32 lg:mx-64 xl:mx-96 grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-18 mt-4">
            <div><About/>
            
            <Languages/><Assets/><Hobbies/></div>
            <div>
            <Experiences/>
            </div>
            <div><Skills/>
            <Formations/></div>
            
            
            
        </main>
    )
}

export default Body;