import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Image from "../../images/14.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class DashboardRoute extends Component {
  state = {};

  render() {
    return (
      <section className="DashContainer">
        <h1>Welcome!</h1>
        <Accordion className="CounterContainer" allowZeroExpanded="true" >
          <AccordionItem uuid="99b887d8-6780-4327-a269-d915d483577a" className="DashboardInfo">
            <AccordionItemHeading>
              <AccordionItemButton>
                Instructions!
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <br />
              - First youll see a notecard that has an english word on it.
              <br />
              <br />
              - Notice the 'Flip Card' button? <br />
              <br />
              - That will allow you to see the translation. But dont cheat until
              you have given it a guess!
              <br />
              <br />
              - Now that you have seen the English word give it a guess as to
              what its translation may be! <br />
              <br />
              - Type your guess into the Box and click the 'Am I Right?!'
              button.
              <br />
              <br />
              - Once you have submitted your answer, we will give you feedback
              accordingly.
              <br />
              <br />
              - Flip the card over to see the correct translation!
              <br />
              <br />- Now that you have seen the answer, Click the "Next Word"
              button to move on and learn the next word!.
            </AccordionItemPanel>
          </AccordionItem>
          <div className="UserStats">
            Times Correct Stats
            <div className="CountContainer">
              <p>Hello:</p>
              <br />
              <p>Goodbye:</p>
              <br />
              <p>Thank You:</p>
              <br />
              <p>Fire:</p>
              <br />
              <p>I am Hungry:</p>
              <br />
              <p>Kiss Kiss:</p>
              <br />
              <p>We Love You:</p>
              <br />
              <p>Ice Cream:</p>
              <br />
              <p>One:</p>
              <br />
              <p>Two:</p>
              <br />
              <p>Three:</p>
              <br />
            </div>
          </div>
        </Accordion>
        <div className="MinionContainer">
          <div>
            Click the learn button to start learning how to speak Minionese.
          </div>
          <Link to="/learn">
            <button className="LearnButton"> Learn</button>
          </Link>
          <img className="MinionImg" src={Image} alt="Minion" />
        </div>
      </section>
    );
  }
}

export default DashboardRoute;
