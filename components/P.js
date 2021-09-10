const P = ({className, children}) => {
    return (
        <p className={`text-gray-100 text-lg md:text-xl ${className}`}>{children}</p>
    )
}

export default P;