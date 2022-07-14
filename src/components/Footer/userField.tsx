import { useState, useEffect} from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ConfirmationScreen from "../Form/ConfirmationScreen"
import UserField from "../Form/UserField";


const SignupForm = ({status, message, onValidated}: any) => {
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
        <div className="text-center General-text text-base">
            <form className="" onSubmit={(e) => submitHandler(e)}>
                {/* <input type="text" className="rounded-[10px] mt-[54px] bg-[#ebebeb99] w-[763px] h-[63px] text-center" placeholder="example@drem.app" value={email} onChange = {(e) => setEmail(e.target.value)} /> */}
                <UserField userFieldCSS={"rounded-[10px] mt-[54px] bg-[#ebebeb99] w-[763px] h-[63px] text-center"}></UserField>
                <br></br>
                <button className="py-[24px] px-[70px] m-auto mt-[67px]
                               text-transparent bg-clip-text bg-gradient-to-r from-[#A814AB] to-[#0029FF] 
                               border-[#F0F0F0] border-[1px] rounded-[50px]
                               text-center font-700 text-[32px] leading-[20px] tracking-[0.25px] font-bold
                               shadow-[0_8px_10px_-1px_rgba(0,0,0,0.35)]" >
                Get Early Access

                </button>
            </form>
            <ConfirmationScreen isOpen={isOpen} closeModal={closeModal} status={status} message={message}/>
        </div>

    )
}

export default SignupForm;