import Section from "./Section";
import Title from "./Title";
import P from './P'
import Button from "./Button";
import Link from "next/link";

const About = () => {
    return (
        <Section className="flex-col" id="about">
            <Title>A propos de moi</Title>
            <P className="max-w-lg">Si vous voulez en savoir un peu plus sur qui je suis, mes centres d'intérêts, mes hobbies.</P>
            <Button>
                <Link href="/about">
                    <a>En savoir plus ?</a>
                </Link>
            </Button>
        </Section>
    )
}

export default About;