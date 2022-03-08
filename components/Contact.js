import { useRef } from 'react'
import Section from "./Section";
import Title from "./Title";
import P from "./P";
import Button from "./Button";
import InputField from "./InputField";
import TextField from "./TextField";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const surnameRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const sendToastError = (text) => {
        toast.error(text, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        let emailData = {
          surname:surnameRef.current.value.trim(), 
          name:nameRef.current.value.trim(), 
          email:emailRef.current.value.trim(), 
          message:messageRef.current.value
        }

        const isValidName = (value) => {
            return value.length >= 3 && value.length < 100
        }
    
        const isValidEmail = (value) => {
            return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        }
    
        const isValidMessage = (value) => {
            return value.length >= 10
        }

        if (!isValidName(emailData.surname)) {
            sendToastError("Le prénom doit contenir entre 3 et 99 caractères")
            return
        }

        if (!isValidName(emailData.name)) {
            sendToastError("Le nom doit contenir entre 3 et 99 caractères")
            return
        }

        if (!isValidEmail(emailData.email)) {
            sendToastError("L'adresse email n'est pas valide")
            return
        }

        if (!isValidMessage(emailData.message)) {
            sendToastError("Votre message doit contenir au moins 10 caractères")
            return
        }

        if(emailData.surname && emailData.name && emailData.email && emailData.message) {
            toast.promise(
                emailjs.send(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, 
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
                    emailData, 
                    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
                )
                .then((result) => {
                    console.log(result.text);
                    e.target.reset()
                }, (error) => {
                    console.log(error.text);
                }), {
                    pending: "Envoi du message",
                    success: "Message envoyé avec succès !",
                    error: "Echec de l'envoi du message"
                }
            )
        }
    }

    return (
        <Section className={`flex-col`} id="contact">
            <Title>Contactez-moi !</Title>
            <P className="max-w-lg">Un projet ? Une question ? Envoyez-moi un message !</P>
            
            <div className="w-full mt-4">
                <form onSubmit={sendEmail} className="w-full">
                <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                    <InputField placeholder="Nom" name="surname" reference={surnameRef} autoComplete="given-name"/>
                    <InputField placeholder="Prenom" name="name" reference={nameRef} autoComplete="family-name"/>
                    <InputField placeholder="email" name="mail" reference={emailRef} autoComplete="email" />
                    <TextField placeholder="Ecrivez votre message" name="message" reference={messageRef} autoComplete="off"/>
                    <Button className="self-end" type="submit" value="Send">
                        Envoyer
                    </Button>
                </form>
            </div>
        </Section>
    )
}

export default Contact;