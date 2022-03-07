const Experience = ({name, place, date, description}) => {
    return (
        <div className="my-2">
            <div className="font-bold text-orange">{name}</div>
            <div className="font-bold text-orange">{place}</div>
            <div className="text-sm font-bold">{date}</div>
            {description.map((item, index) =>
                <div key={index}>{item}</div>
            )}
        </div>
    )
}

export default Experience;