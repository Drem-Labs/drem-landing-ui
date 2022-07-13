import React from "react";
import UserField from "../Footer/userField"

class Footer extends React.Component {
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

        <UserField></UserField>

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