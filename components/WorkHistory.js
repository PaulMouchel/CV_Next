import Section from "./Section";
import Title from "./Title";
import P from './P'
import Button from "./Button";
import Link from "next/link";

const WorkHistory = () => {
    return (
        <Section className="flex-col" id="work">
            <Title>Mon travail</Title>
            <P className="max-w-lg">Ici je parle de mon parcours, des différents projets que j'ai réalisé, et des partenaires avec qui j'ai collaboré.</P>
            <Link href="/work">
                <a>
                    <Button>
                        Jeter un œil
                    </Button>
                </a>
            </Link>
        </Section>

    )
}

export default WorkHistory;