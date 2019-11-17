import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Image from '../../images/minionseyes.png';


class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section>
        <p>
          Practice learning a language with the spaced reptition revision technique.
        </p>
        <h2>Sign up - (Gag aka)</h2>
        {/* <img src={Image} alt="logo"/> */}
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute
