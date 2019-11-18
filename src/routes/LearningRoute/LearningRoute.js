import React, { Component } from "react";
import "./LearningRoute.css";
import ReactCardFlip from "react-card-flip";
import AuthApiService from "../../services/auth-api-service";

class LearningRoute extends Component {
  state = {
    words: [],
    isFlipped: false
  };

  handleClick = async e => {
    e.preventDefault();
    const GetStuff = await AuthApiService.getLanguage();
    this.setState({ words: GetStuff.words });
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  nextWord() {}

  render() {
    console.log(this.state);
    return (
      <section className="LearnContainer">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1"
          flipSpeedFrontToBack="1"
        >
          <div className="flip-card">This is the front of the card.</div>

          <div className="flip-card">This is the back of the card.</div>
        </ReactCardFlip>
        <div className="buttonContainer">
          <button onClick={this.handleClick.bind(this)}>Click to flip</button>
          <input
            type="text"
            id="CheckAnswer"
            title="AnswerCheck"
            placeholder="Your Answer"
          />
          <button onClick={this.nextWord.bind(this)}>Next Word</button>
        </div>
      </section>
    );
  }
}

export default LearningRoute;
