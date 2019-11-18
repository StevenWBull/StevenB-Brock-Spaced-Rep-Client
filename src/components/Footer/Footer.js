import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import Image from "../../images/mini.png";
import "./Footer.css";

class Header extends Component {
  static contextType = UserContext;

  render() {
    return (
      <footer className="FooterContainer">
        {/* <img className="EyesImg" src={Image} alt="Eyes" /> */}
      </footer>
    );
  }
}

export default Header;