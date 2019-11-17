import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <div className="HeaderLoggedInContainer">
          <Link to="/">
            <p>
              Home
            </p>
          </Link>
          <Link to="/login">
            <button className="HeaderLogoutButton" onClick={this.handleLogoutClick}>Logout
            </button>
          </Link>
        </div>
      </div>
    )
  }

  renderLoginLink() {
    return (
        <nav className="HeaderNotLoggedIn">
          <Link to='/login'>Login</Link>
          <Link to='/register'>Sign up</Link>
        </nav>
    )
  }

  render() {
    return (
      <div className="Header">
        <header className="HeaderContainer">
          <nav className="NavHeader">
              <h1>
              <Link to='/'>
                Minionese
              </Link>
              </h1>
              <span className="HeaderTaglineWide">Learn Banana Langauge.</span>
          </nav>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
      </header>
      </div>
    );
  }
}

export default Header
