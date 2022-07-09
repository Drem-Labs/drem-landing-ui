import { useState } from "react";

const Field = () => {
    const[email, setEmail] = useState("")

    //Submission field in the footer. Once you submit email, an alert pops up and page state resets to default
    return(
        <div className="text-center General-text text-base">
            <form onSubmit={() => alert("Thank you for joining us " + email)}>
                <input type="text" className="mt-[54px] bg-[#ebebeb99] w-[763px] h-[63px] text-center" placeholder="example@drem.app" value={email} onChange = {(e) => setEmail(e.target.value)} />
                <br></br>
                <button className="py-[24px] px-[70px] m-auto mt-[67px] 
                               text-transparent bg-clip-text bg-gradient-to-r from-[#A814AB] to-[#0029FF] 
                               border-[#F0F0F0] border-[1px] rounded-[50px]
                               text-center font-700 text-[32px] leading-[20px] tracking-[0.25px] font-bold
                               shadow-[2px_6px_4px_rgba(0,0,0,0.25)]">
                Get Early Access
                </button>
            </form>
            
        </div>
    )
}

export default Field;