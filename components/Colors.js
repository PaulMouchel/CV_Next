const Colors = ({className}) => {
    return (
        <div className={`w-full flex h-full ${className}`}>
            <div className="bg-darkGreen w-1/5 h-full"/>
            <div className="bg-green w-1/5 h-full"/>
            <div className="bg-yellow w-1/5 h-full"/>
            <div className="bg-orange w-1/5 h-full"/>
            <div className="bg-red w-1/5 h-full"/>
        </div>
    )
}

export default Colors;