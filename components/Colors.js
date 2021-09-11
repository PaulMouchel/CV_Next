import { colors } from "../data/colors";

const Colors = ({className}) => {
    return (
        <div className={`w-full flex h-full ${className}`}>
            {colors.map((color, index) =>
            <div key={index} className={`bg-${color} w-1/5 h-full`}/>
            )}
        </div>
    )
}

export default Colors;