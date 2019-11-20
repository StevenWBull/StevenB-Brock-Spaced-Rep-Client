import React, { Component } from "react";
import "./LearningRoute.css";
import ReactCardFlip from "react-card-flip";
import WordsContext from '../../contexts/WordsContext';

class LearningRoute extends Component {
  state = {
    isFlipped: false
  };

  static contextType = WordsContext;

  handleClick = async e => {
    e.preventDefault();
    this.setState({index: this.state.index + 1})
  };

  handleFlip(e){
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  nextWord() {}

  render() {
    const word = this.context.words.words
    const nextWord = this.context.words.language
    return (
      <section className="LearnContainer">
        <h1 className="TranslateTitle">
          Translate This Word!
        </h1>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1"
          flipSpeedFrontToBack="1"
        >
          <div className="flip-card">
            <p>English Word To Translate</p>
            {word ? <p>{word.find( word => word.id === nextWord.head ).translation}</p> : null}
          </div>

          <div className="flip-card">
            <p>Minionese Translation</p>
            {word ? <p>{word.find( word => word.id === nextWord.head ).original}</p> : null}
          </div>
        </ReactCardFlip>
        <div className="buttonContainer">
          <button className="FlipButton" onClick={this.handleFlip.bind(this)}>Click to flip</button>
          <div className="InputContainer">
            <input
              className="LearnInput"
              type="text"
              id="CheckAnswer"
              title="AnswerCheck"
              placeholder="Your Answer"
            />
            <button type="submit" className="CheckAnswer"> Was I Right?!</button>
          </div>
        </div>
        <button className="NextButton" onClick={this.handleClick.bind(this)}>-> Next Word -></button>
        <span className="Instruct">
          Click the home button to see instructions
        </span>
      </section>
    );
  }
}

export default LearningRoute;
