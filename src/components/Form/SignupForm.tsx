import { useState, useEffect} from "react";
import ConfirmationScreen from "./ConfirmationScreen"


const SignupForm = ({status, message, onValidated, styling}: any) => {
    const [email, setEmail] = useState("");

    //state variable to show status message after user subscribes 
    const [isOpen, setIsOpen] = useState(false)

    const submitHandler = (e: any ) => {
        e.preventDefault();
        console.log(email)
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
        });
    }

    const clearFields = () => {
        setEmail("")
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        if(status === "success" || status === "error") {
            clearFields()
            openModal()
        } 
    }, [status]) 

    //Submission field in the footer. Once you submit email, an alert pops up and page state resets to default
    return(
        <div className={styling.div}>
            <form className={styling.form} onSubmit={(e) => submitHandler(e)}>
                <input type="text" className={styling.input} placeholder="example@drem.app" value={email} onChange = {(e) => setEmail(e.target.value)} />
                <br></br>
                <button className={styling.button}> Get Early Access </button>
            </form>
            <ConfirmationScreen isOpen={isOpen} closeModal={closeModal} status={status} message={message}/>
        </div>

    )
}

export default SignupForm;
