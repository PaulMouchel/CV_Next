import useWindowDimensions from '../hooks/useWindowDimention'

const Section = (props) => {
    const { height } = useWindowDimensions();

    const minHeight = height >= 550 ? 'min-h-screen' : 'min-h-[550px]'

    return (
        <section className={`${minHeight} flex justify-center items-center ${props.className}`} id={props.id}>
            {props.children}
        </section>

    )
}

export default Section;