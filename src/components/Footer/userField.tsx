import { useState } from "react";

const Field = () => {
    const[email, setEmail] = useState("")

    return(
        <div className="text-center">
            <form onSubmit={() => alert("Thank you for joining us " + email)}>
                <input type="text" className="User-field" value={email} onChange = {(e) => setEmail(e.target.value)} />
            </form>
        </div>
    )
}

export default Field;