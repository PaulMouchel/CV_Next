const Experience = ({name, place, date, description}) => {
    return (
        <div className="">
            <span className="font-bold">{name}</span>
            <span>{place}</span>
            <span>{date}</span>
            <span>{description}</span>
        </div>
    )
}

export default Experience;