import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'

const WordsContext = React.createContext({
  nextWord: [],
  words: [],
  setError: () => {},
})

export default WordsContext;

export class WordsProvider extends Component {
  state = {
    nextWord: [],
    words: []
  }

  componentDidMount() {
    AuthApiService.getLanguage()
      .then( data => {
        this.setState({ words: data })
      })
      .catch(res => this.setError(res));

    AuthApiService.getNextWord()
      .then( data => {
        this.setState({ nextWord: data })
      })
      .catch(res => this.setError(res));
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  render() {
    const value = {
      nextWord: this.state.nextWord,
      words: this.state.words,
      setError: this.setError
    }
    return (
      <WordsContext.Provider value={value}>
        {this.props.children}
      </WordsContext.Provider>
    )
  }
}