import React, { Component } from "react";
import "./LearningRoute.css";
import ReactCardFlip from "react-card-flip";
import AuthApiService from "../../services/auth-api-service";

class LearningRoute extends Component {
  state = {
    words: [],
    index: 1,
    isFlipped: false
  };

  /* componentWillMount = () => {
    const GetStuff = AuthApiService.getLanguage();
    this.setState({ words: GetStuff.words });
  } */

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
    console.log(this.state.words);
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
            {this.state.words.find(e => e.id == this.state.index)}
            <p>English Word To Translate</p>
          </div>

          <div className="flip-card">
            <p>Minionese Translation</p>
          </div>
        </ReactCardFlip>
        <div className="buttonContainer">
          <button className="LearnButton" onClick={this.handleFlip.bind(this)}>Click to flip</button>
          <div className="InputContainer">
            <input
              className="LearnInput"
              type="text"
              id="CheckAnswer"
              title="AnswerCheck"
              placeholder="Your Answer"
            />
            <button className="CheckAnswer"> Was I Right?!</button>
          </div>
        </div>
        <button className="NextButton" onClick={this.handleClick.bind(this)}>Next Word</button>
      </section>
    );
  }
}

export default LearningRoute;
