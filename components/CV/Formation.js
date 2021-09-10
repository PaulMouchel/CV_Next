const Formation = ({date, title, description}) => {
    return (
        <div className="my-2">
            <span>{date} | </span>
            <span className="font-bold">{title}</span> 
            <span>{description}</span>
        </div>
    )
}

export default Formation;