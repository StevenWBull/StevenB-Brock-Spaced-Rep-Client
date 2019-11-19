import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Image from '../../images/14.png'

class DashboardRoute extends Component {
  state = {
  };

  render() {
    return (
      <section className="DashContainer">
        <h1>
          Welcome!
        </h1>
        <div className="DashboardInfo">
          The process is simple! <br/>
          - First youll see a notecard that has an english word on it.<br/>
          - Notice the 'Flip Card' button? <br/>
          - That will allow you to see the translation. But dont cheat until you have given it a guess!<br/>
          - Now that you have seen the English word give it a guess as to what its translation may be! <br/>
          - Once you have submitted your answer, we will give you feedback accordingly.<br/>
          - Now that you have taken a guess, Click the "Next Word" button to move on to the next word!.
        </div>
        <div className="MinionContainer">
          <div>
            Click the learn button to start learning how to speak Minionese.
          </div>
          <Link
          to='/learn'
          > LEARN SOME SHIT NOOB
          </Link>
          <img className="MinionImg" src={Image} alt="Minion" />

        </div>

      </section>
    );
  }
}

export default DashboardRoute;