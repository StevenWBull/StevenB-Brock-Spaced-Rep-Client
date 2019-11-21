import React, { Component } from "react";
import "./LearningRoute.css";
import ReactCardFlip from "react-card-flip";
import WordsContext from '../../contexts/WordsContext';
import AuthApiService from '../../services/auth-api-service';

class LearningRoute extends Component {
  state = {
    isFlipped: false,
    isCorrect: null
  };
  static contextType = WordsContext;

  handleFlip(e){
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  handleGuess = async(ev) => {
    ev.preventDefault();
    const { guess } = ev.target;
    const isCorrect = await AuthApiService.postGuess(guess.value);
    this.setState({ isCorrect: isCorrect })
    document.getElementById('CheckAnswer').value='';
  }

  handleCorrectAnswer = (word) => {
    return (
      <>
        <p>Awesome job! You got it right!</p>
        <p>current word score:</p>
        <p>Correct: {word.correct_count + 1} Incorrect: {word.incorrect_count}</p>
      </>
    )
  }

  handleIncorrectAnswer = (word) => {
    return (
      <>
        <p>Oooh sorry! Please flip the card to see the translation.</p>
        <p>current word score:</p>
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
    const currWord = word.find( word => word.id === nextWord.head) || [];
    return (
      <section className="LearnContainer">
        <h1 className="TranslateTitle">
          Translate This Word!
        </h1>
        <h3 className="TotalScore">
          Total Score: { language ? language.total_score : null}
        </h3>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1"
          flipSpeedFrontToBack="1"
        >
          <div className="flip-card">
            <p>Minionese Word to Translate</p>
            {word ? <p>{currWord.original}</p> : null}
            {isCorrect && (isCorrect.isCorrect === true ? this.handleCorrectAnswer(currWord) : this.handleIncorrectAnswer(currWord))}
          </div>
          <div className="flip-card">
            <p>English Translation</p>
            {word ? <p>{currWord.translation}</p> : null}
          </div>
        </ReactCardFlip>
        <div className="buttonContainer">
          <button className="FlipButton" onClick={this.handleFlip.bind(this)} disabled={!isCorrect ? true : false}>Click to flip</button>
          <form className="InputContainer" onSubmit={this.handleGuess}>
            <br></br>
            <input
              className="LearnInput"
              name='guess'
              type="text"
              id="CheckAnswer"
              title="AnswerCheck"
              placeholder="Your Answer"
            required/>
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
