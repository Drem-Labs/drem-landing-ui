import { useState, useEffect} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ConfirmationScreen from "./ConfirmationScreen"


const SignupForm = ({status, message, onValidated}: any) => {
    const [email, setEmail] = useState("");

    //state variable to show status message after user subscribes 
    const [isOpen, setIsOpen] = useState(false)

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

       function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

    useEffect(() => {
        if(status === "success" || status === "error") {
            // clearFields()
            openModal()
        } 
    }, [status]) 

    //Submission field in the footer. Once you submit email, an alert pops up and page state resets to default
    return(
        <div>
            <form className="flex flex-row my-8" onSubmit={(e) => submitHandler(e)}>
                {/* <input className="w-3/5 mr-2 bg-[#9498a4] bg-opacity-25 appearance-none rounded w-full py-2 px-3 text-white text-center focus:outline-none focus:shadow-outline placeholder:text-white placeholder:font-[montserrat]" id="email" type="text" placeholder="example@drem.com" value={email} onChange = {(e) => setEmail(e.target.value)}></input>
                 */}
                <br></br>
                <button className="w-2/5 ml-2 bg-white hover:bg-white-700 text-black font-bold py-2 px-16 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Get Early Access
                </button>
            </form>
            <ConfirmationScreen isOpen={isOpen} closeModal={closeModal} status={status} message={message}/>
        </div>

    )
}

export default SignupForm;