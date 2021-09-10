import Section from "./Section";
import Title from "./Title";
import P from "./P";
import Button from "./Button";
import InputField from "./InputField";
import TextField from "./TextField";

const Contact = () => {
    return (
        <Section className={`flex-col`} id="contact">
            <Title>Contactez-moi !</Title>
            <P className="max-w-lg">Un projet ? Une question ? Envoyez-moi un message !</P>
            
            <div className="w-full mt-4">
                <form  className="w-full">
                    <InputField placeholder="Nom" name="surname" />
                    <InputField placeholder="Prenom" name="name" />
                    <InputField placeholder="Mail" name="mail"  />
                    <TextField placeholder="Ecrivez votre message" name="message"  />
                    <Button className="self-end" type="submit" value="Send">
                    Envoyer
                    </Button>
                </form>
            </div>
        </Section>
    )
}

export default Contact;