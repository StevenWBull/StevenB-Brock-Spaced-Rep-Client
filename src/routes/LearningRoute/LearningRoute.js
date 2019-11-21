import React, { Component } from "react";
import "./LearningRoute.css";
import ReactCardFlip from "react-card-flip";
import WordsContext from '../../contexts/WordsContext';
import AuthApiService from '../../services/auth-api-service';

class LearningRoute extends Component {
  state = {
    isFlipped: false,
    isCorrect: null,
    isError: null
  };
  static contextType = WordsContext;

  handleFlip(e){
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  handleGuess = async(ev) => {
    ev.preventDefault();
    const { guess } = ev.target;
    try {
      const isCorrect = await AuthApiService.postGuess(guess.value);
      this.setState({ isCorrect: isCorrect })
    } catch(error) {
      this.setState({ isError: error });
    }
  }

  handleCorrectAnswer = (word) => {
    return (
      <>
        <p>Awesome job! You got it right!</p>
        <p>Your current score for this word is:</p>
        <p>Correct: {word.correct_count + 1} Incorrect: {word.incorrect_count}</p>
      </>
    )
  }

  handleIncorrectAnswer = (word) => {
    return (
      <>
        <p>Oooh sorry! Please flip the card to see the translation.</p>
        <p>Your current score for this word is:</p>
        <p>Correct: {word.correct_count} Incorrect: {word.incorrect_count + 1}</p>        
      </>
    )
  }

  handleNextWord = () => {
    this.setState({
      isCorrect: null,
      isFlipped: false
    })
    this.context.setUpdate();
  }

  render() {
    const word = this.context.words.words;
    const language = this.context.words.language
    const nextWord = this.context.words.language;
    const isCorrect = this.state.isCorrect;
    return (
      <section className="LearnContainer">
        <h1 className="TranslateTitle">
          Translate This Word!
        </h1>
        <h3>
          Total Score: { language ? language.total_score : null}
        </h3>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1"
          flipSpeedFrontToBack="1"
        >
          <div className="flip-card">
            <p>Minionese Translation</p>
            {word ? <p>{word.find( word => word.id === nextWord.head ).original}</p> : null}
            {isCorrect && (isCorrect.isCorrect === true ? this.handleCorrectAnswer(word.find( word => word.id === nextWord.head)) : this.handleIncorrectAnswer(word.find( word => word.id === nextWord.head)))}
          </div>
          <div className="flip-card">
            <p>English Word To Translate</p>
            {word ? <p>{word.find( word => word.id === nextWord.head ).translation}</p> : null}
          </div>
        </ReactCardFlip>
        <div className="buttonContainer">
          <button className="FlipButton" onClick={this.handleFlip.bind(this)} disabled={!isCorrect ? true : false}>Click to flip</button>
          <form className="InputContainer" onSubmit={this.handleGuess}>
            <input
              className="LearnInput"
              name='guess'
              type="text"
              id="CheckAnswer"
              title="AnswerCheck"
              placeholder="Your Answer"
            required/>
            {this.state.isError && <p>Please input an answer!</p>}
            <button type="submit" className="CheckAnswer"> Was I Right?!</button>
          </form>
        </div>
        <button className="NextButton" onClick={this.handleNextWord} disabled={!isCorrect ? true : false}>-> Next Word -></button>
        <span className="Instruct">
          Click the home button to see instructions
        </span>
      </section>
    );
  }
}

export default LearningRoute;
