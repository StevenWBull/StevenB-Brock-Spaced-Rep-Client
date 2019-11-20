import React, { Component } from "react";
import "./LearningRoute.css";
import ReactCardFlip from "react-card-flip";
<<<<<<< HEAD
import WordsContext from '../../contexts/WordsContext';

class LearningRoute extends Component {
  state = {
    isFlipped: false
  };

  static contextType = WordsContext;
=======
import AuthApiService from "../../services/auth-api-service";
import UserContext from '../../contexts/UserContext';


class LearningRoute extends Component {
  state = {
    words: []
  };

  static contextType = UserContext;

  componentDidMount = () => {
    AuthApiService.getLanguage()
      .then( data => {
        this.setState({ words: data })
      })
      .catch(res => this.context.setError(res));
  }
>>>>>>> 2f21f7111cdd3a75ac1b1e73ec073b18b8dcbae3

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
<<<<<<< HEAD
    const word = this.context.words.words
    const nextWord = this.context.words.language
=======
    const { words } = this.state.words;
    console.log(words)
>>>>>>> 2f21f7111cdd3a75ac1b1e73ec073b18b8dcbae3
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
<<<<<<< HEAD
            {}
=======
            {words 
                ? words.find({word} => word.id == word) 
                : null
            }
>>>>>>> 2f21f7111cdd3a75ac1b1e73ec073b18b8dcbae3
            <p>English Word To Translate</p>
          </div>

          <div className="flip-card">
            <p>Minionese Translation</p>
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
