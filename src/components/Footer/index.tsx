import React from "react";
import MailchimpForm from "../Form/MailchimpForm";

class Footer extends React.Component {

  // styling for the subscription form in the footer
  styling = {
    div: "text-center General-text text-base",
    form: "",
    input: "rounded-[10px] mt-[54px] bg-[#ebebeb99] w-[763px] h-[63px] text-center",
    button: "py-[24px] px-[70px] m-auto mt-[67px] text-transparent bg-clip-text bg-gradient-to-r from-[#A814AB] to-[#0029FF] border-[#F0F0F0] border-[1px] rounded-[50px] text-center font-700 text-[32px] leading-[20px] tracking-[0.25px] font-bold shadow-[0_8px_10px_-1px_rgba(0,0,0,0.35)]"
}

  render() {
    return (
      <div>
        <div className="font-[montserrat]
                        not-italic
                        font-semibold
                        -tracking-[1px]
                        text-center">
          <h1 className="mt-[258px]
                         text-[64px]
                         leading-[96px]
                         text-transparent
                         bg-clip-text
                         bg-gradient-to-r from-[#A814AB] to-[#0029FF]">Join Us</h1>
          <div className="text-[32px] leading-[48px] text-[#06080F]">
            <p>Become a part of the community creating</p>
            <p>the future. It's yours, own it 💎</p>
          </div>
        </div>

        <MailchimpForm styling={this.styling} />

        <div className="flex flex-row justify-center mt-[250px]">
          <img src='./images/icons/Twitter-icon.svg' alt="Drem's Twitter"/>
          <img className='ml-[43px] mr-[43px]' src='./images/icons/drem-icon-blk.svg' alt="Drem Icon"/>
          <a href="https://github.com/Drem-Labs">
            <img src='./images/icons/gh-icon.svg' alt="Drem's Git Hub Page"/>
          </a>
        </div>



      </div>
    )
  }
}

export default Footer;