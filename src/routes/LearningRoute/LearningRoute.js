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

  componentDidMount(){
    const GetStuff = AuthApiService.getLanguage();
    this.setState({ words: GetStuff.words });
  }

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
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1"
          flipSpeedFrontToBack="1"
        >
          <div className="flip-card">
            {this.state.words.find(e => e.id == this.state.index)}
            This is the front of the card.
          </div>

          <div className="flip-card">This is the back of the card.</div>
        </ReactCardFlip>
        <div className="buttonContainer">
          <button className="LearnButton" onClick={this.handleFlip.bind(this)}>Click to flip</button>
          <input
            className="LearnInput"
            type="text"
            id="CheckAnswer"
            title="AnswerCheck"
            placeholder="Your Answer"
          />
          <button className="LearnButton" onClick={this.handleClick.bind(this)}>Next Word</button>
        </div>
      </section>
    );
  }
}

export default LearningRoute;
