import Section from "./Section";
import Title from "./Title";
import P from './P'
import Button from "./Button";
import Link from "next/link";

const WorkHistory = () => {
    return (
        <Section className="flex-col" id="work">
            <Title>Mon travail</Title>
            <P className="max-w-lg">Ici je parle de mon parcours et des différents projets que j'ai réaliser, et des partenaires avec qui j'ai collaboré.</P>
            <Button>
                <Link href="/work">
                    <a>Jetter un oeil</a>
                </Link>
            </Button>
        </Section>

    )
}

export default WorkHistory;