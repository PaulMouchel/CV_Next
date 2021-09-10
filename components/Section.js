const Section = (props) => {
    return (
        <section className={`min-h-screen flex justify-center items-center ${props.className}`} id={props.id}>
            {props.children}
        </section>

    )
}

export default Section;