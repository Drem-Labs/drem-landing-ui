import { useState } from "react";

const Field = () => {
    const[email, setEmail] = useState("")

    return(
        <div className="text-center">
            <form onSubmit={() => alert("Thank you for joining us " + email)}>
                <input type="text" className="mt-[54px] bg-[#ebebeb99] w-[763px] h-[63px]" value={email} onChange = {(e) => setEmail(e.target.value)} />
            </form>
        </div>
    )
}

export default Field;