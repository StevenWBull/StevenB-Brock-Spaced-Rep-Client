import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "./Footer.css";

class Header extends Component {
  static contextType = UserContext;

  render() {
    return (
      <footer className="FooterContainer">
        <p className="CreatedBy">|| Learning App Created by ||</p>
        <span className="Pair">Brock Boutwell & Steven Bull</span> 
      </footer>
    );
  }
}

export default Header;