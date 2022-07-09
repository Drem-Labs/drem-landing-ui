import { useState } from "react";

const Field = () => {
    const[email, setEmail] = useState("")

    //Submission field in the footer. Once you submit email, an alert pops up and page state resets to default
    return(
        <div className="text-center General-text text-base">
            <form onSubmit={() => alert("Thank you for joining us " + email)}>
                <input type="text" className="mt-[54px] bg-[#ebebeb99] w-[763px] h-[63px] text-center" placeholder="example@drem.app" value={email} onChange = {(e) => setEmail(e.target.value)} />
            </form>
        </div>
    )
}

export default Field;