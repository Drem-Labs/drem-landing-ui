import React from 'react';
import Mailchimp from "react-mailchimp-subscribe";
import SignupForm from './SignupForm';
// import SignupForm from '../Footer/userField'

const MailchimpForm = (props) => {    

    // const url = "https://app.us8.list-manage.com/subscribe/post?u=5c96a5bd3f2fa6cef4db5c6fb&id=6407c80f04"
    const url = `${process.env.REACT_APP_MAILCHIMP_SUBSCRIBE_FORM_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div>
            <Mailchimp 
                url = {url} 
                render={({ subscribe, status, message}) => (
                    <SignupForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        styling={props.styling}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpForm;