import { useState, useEffect} from "react";
import ConfirmationScreen from "./ConfirmationScreen"


const SignupForm = ({status, message, onValidated, styling}: any) => {
    const [email, setEmail] = useState("");

    // state variable to control whether or not the alert should be shown
    const [isOpen, setIsOpen] = useState(false)

    // check if there is text in the email text field and if that text includes an @ sign
    // if a valid email is present subscribe the user to the DREM contact list 
    const submitHandler = (e: any ) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });
    }

    const clearFields = () => {
        setEmail("")
    }

    // show alert after user subscribes
    function openModal() {
        setIsOpen(true)
    }

    // close alert after users presses esc or clicks outsides the alert box
    function closeModal() {
        setIsOpen(false)
    }

    // after the user submits the form and Mailchimp returns the status of that request, 
    // clear the email text field and show an alert notifying the user whether 
    // they were successful or not at subscribing
    useEffect(() => {
        if(status === "success" || status === "error") {
            clearFields()
            openModal()
        } 
    }, [status]) 

    //a form that allows users to subscribe to the DREM contact list, notifies the user if they were successful or not, and clears the email text field
    return(
        <div className={styling.div}>
            <form className={styling.form} onSubmit={(e) => submitHandler(e)}>
                <input type="text" className={styling.input} placeholder="example@drem.app" value={email} onChange = {(e) => setEmail(e.target.value)} />
                <br></br>
                <button className={styling.button}> 
                    <h2 className={styling.header}>Get Early Access</h2>
                </button>
            </form>
            <ConfirmationScreen isOpen={isOpen} closeModal={closeModal} status={status} message={message}/>
        </div>
    )
}

export default SignupForm;
