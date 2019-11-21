import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Image from "../../images/14.png";
import WordsContext from '../../contexts/WordsContext';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class DashboardRoute extends Component {
  static contextType = WordsContext;

  render() {
    const { words } = this.context.words;
    const language = this.context.words.language
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
              - First you will see a notecard that has an Minionese word on it.
              <br />
              <br />
              - Notice the 'Flip Card' button? <br />
              <br />
              - That will allow you to see the translation, But will be disabled until after you guess!
              <br />
              <br />
              - Now that you have seen the Minionese word give it a guess as to
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
            <h3>Stats</h3>
            <span className="CorrectCount">Correct</span> | <span className="IncorrectCount">Incorrect</span>
            <div className="CountContainer">
              {words 
                ? words.sort((a, b) => a.id - b.id).map( word => <div className="StatsContainer"><p key={word.id}>{word.original}</p><span className="CorrectCount">{word.correct_count}</span>|<span className="IncorrectCount">{word.incorrect_count}</span></div>) 
                : null
              }
            </div>
            <div className="TotalScoreDash">
              Total Score: { language ? language.total_score : null}
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
