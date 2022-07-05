import React from "react";
import "../Footer/index.css"
import UserField from "../Footer/userField"

class Footer extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Footer-header">Join us</h1>
        <p className="Footer-para">Want to stay in the loop? Drop us your</p>
        <p className="Footer-para">email and we'll send alpha your way</p>
        <UserField></UserField>
        <div className="icons">
          <img src='./images/icons/Twitter-icon.svg' alt="Twitter-icon"/>
          <span className="Drem-icon">
            <img src='./images/icons/drem-icon-blk.svg' alt="Drem icon"/>
          </span>
          <a href="https://github.com/Drem-Labs">
            <img src='./images/icons/gh-icon.svg' alt="Git Hub icon"/>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;