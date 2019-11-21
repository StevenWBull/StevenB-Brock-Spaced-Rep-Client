import React, { Component } from 'react'
import AuthApiService from '../services/auth-api-service'

const WordsContext = React.createContext({
  nextWord: [],
  words: [],
  update: false,
  setError: () => {},
  setUpdate: () => {}
})

export default WordsContext;

export class WordsProvider extends Component {
  state = {
    nextWord: [],
    words: [],
    update: false
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

  setUpdate = () => {
    let newUpdate = !this.state.update;
    console.log(newUpdate)
    console.log('I ran!')
    this.setState({ 
      update: newUpdate
    }, this.componentDidMount)
  }

  render() {
    const value = {
      nextWord: this.state.nextWord,
      words: this.state.words,
      setError: this.setError,
      setUpdate: this.setUpdate
    }
    return (
      <WordsContext.Provider value={value}>
        {this.props.children}
      </WordsContext.Provider>
    )
  }
}