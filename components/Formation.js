const Formation = ({date, title, description}) => {
    return (
        <div className="">
            <span>{date} | </span>
            <span className="font-bold">{title}</span>
            <span>{description}</span>
        </div>
    )
}

export default Formation;