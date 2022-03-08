const Section = ({className, id, children, hScreen=false}) => {
    const minHeight = hScreen ? 'min-h-screen' : 'min-h-[550px]'

    return (
        <section className={`${minHeight} flex justify-center items-center ${className}`} id={id}>
            {children}
        </section>

    )
}

export default Section;