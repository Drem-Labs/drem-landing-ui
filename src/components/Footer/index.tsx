import React from "react";
import MailchimpForm from "../Form/MailchimpForm";

class Footer extends React.Component {

  // styling for the subscription form in the footer
  styling = {
    div: "text-center mx-15",
    form: "",
    input: "rounded-[10px] mt-[54px] bg-[#ebebeb99] w-64 sm:w-[763px] md:w-5/6 xl:w-[763px] h-12 sm:h-[63px] text-center",
    button: "py-[12px] sm:py-[24px] px-[20px] sm:px-[70px] m-auto mt-8 sm:mt-[67px] text-transparent bg-clip-text bg-gradient-to-r from-[#A814AB] to-[#0029FF] border-[#F0F0F0] border-[1px] rounded-[50px] text-center sm:text-[32px] leading-[20px] tracking-[0.25px] font-bold shadow-[0_8px_10px_-1px_rgba(0,0,0,0.35)]",
    header: ""
  }

  render() {
    return (
      <div>
        <div className="font-[montserrat]
                        not-italic
                        font-semibold
                        -tracking-[1px]
                        text-center">
          <h1 className="mt-16
                         sm:mt-32
                         2xl:mt-[258px]
                         text-4xl
                         sm:text-6xl
                         leading-[96px]
                         text-transparent
                         bg-clip-text
                         bg-gradient-to-r from-[#A814AB] to-[#0029FF]">Join Us</h1>
          <div className="pt-8 sm:text-4xl leading-4 sm:leading-[48px] text-[#06080F]">
            <p>Become a part of the community creating</p>
            <p>the future. It's yours, own it 💎</p>
          </div>
        </div>
        <MailchimpForm styling={this.styling} />
        <div className="flex flex-row justify-center mt-[60px] sm:mt-[250px]">
          <img className="w-[40px] sm:w-[77px]" src='./images/icons/Twitter-icon.svg' alt="Drem's Twitter"/>
          <img className='w-[40px] sm:w-[67px] mx-[15px] sm:mx-[43px]' src='./images/icons/drem-icon-blk.svg' alt="Drem Icon"/>
          <a href="https://github.com/Drem-Labs">
            <img className="w-[40px] sm:w-[77px]" src='./images/icons/gh-icon.svg' alt="Drem's Git Hub Page"/>
          </a>
        </div>



      </div>
    )
  }
}

export default Footer;