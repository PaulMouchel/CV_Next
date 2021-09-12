import { useRef, useState, useEffect } from 'react'
import Section from "./Section";
import Title from "./Title";
import P from "./P";
import Button from "./Button";
import InputField from "./InputField";
import TextField from "./TextField";
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const surnameRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    useEffect(() => {
        console.log("update")
        if (error || success) {
            setTimeout(() => { setError(null), setSuccess(null)}, 5000);
        }
    }, [error, success])

    const sendEmail = (e) => {
        e.preventDefault();
        let emailData = {
          surname:surnameRef.current.value, 
          name:nameRef.current.value, 
          email:emailRef.current.value, 
          message:messageRef.current.value
        }

        if(emailData.surname && emailData.name && emailData.email && emailData.message) {
            emailjs.send(
            process.env.EMAILJS_SERVICE_ID, 
            process.env.EMAILJS_TEMPLATE_ID, 
            emailData, 
            process.env.EMAILJS_USER_ID
            )
            .then((result) => {
                console.log(result.text);
                setSuccess("Message envoyé avec succès !")
            }, (error) => {
                console.log(error.text);
                setError("Echec de l'envoi du message : " + error.text)
            });
            }
          e.target.reset()
      }

      const infoVariant = {
          stop:{y:-100},
          go:{y:-0},
          exit:{y:-100}
      }

    return (
        <Section className={`flex-col`} id="contact">
            <Title>Contactez-moi !</Title>
            <P className="max-w-lg">Un projet ? Une question ? Envoyez-moi un message !</P>
            
            <div className="w-full mt-4">
                <form onSubmit={sendEmail} className="w-full">
                    <AnimatePresence>
                        { error && 
                            <motion.div initial="stop" animate="go" exit="exit" variants={infoVariant} className="fixed top-4 w-screen left-0 flex justify-center">
                                <div className="max-w-xl w-full left-0 h-full border-2 border-red bg-gray-900 text-center text-red font-bold bg-green-500 flex items-center justify-center py-2 rounded">{error}</div>
                            </motion.div>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        { success && 
                            <motion.div initial="stop" animate="go" exit="exit" variants={infoVariant} className="fixed top-4 w-screen left-0 flex justify-center">
                                <div className="max-w-xl w-full left-0 h-full border-2 border-green bg-gray-900 text-center text-green font-bold bg-green-500 flex items-center justify-center py-2 rounded">{success}</div>
                            </motion.div>
                        }
                    </AnimatePresence>
                    <InputField placeholder="Nom" name="surname" reference={surnameRef} autoComplete="off"/>
                    <InputField placeholder="Prenom" name="name" reference={nameRef} autoComplete="off"/>
                    <InputField placeholder="Mail" name="mail" reference={emailRef} autoComplete="off" />
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