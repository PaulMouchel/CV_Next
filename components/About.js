import Section from "./Section";
import Title from "./Title";
import P from './P'
import Button from "./Button";

const About = () => {
    return (
        <Section className="flex-col" id="about">
            <Title>A propos de moi</Title>
            <P>Here you can find out more about me, my hobbies and personal project I'm currently working on.</P>
            <Button>Envie d'en savoir plus ?</Button>
        </Section>
    )
}

export default About;