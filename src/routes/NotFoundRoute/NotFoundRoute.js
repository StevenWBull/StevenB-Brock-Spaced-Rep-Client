import React, { Component } from 'react'
import Image from '../../images/beedo.png'
import Image2 from '../../images/derpminion.png'
import './NotFoundRoute.css'

class NotFoundRoute extends Component {
  render() {
    return (
      <section className="NotFoundPage">
        <h2>404 - Page not found</h2>
        <p>Try going back to your previous page.</p>
        <div className="ImageContainer">
          <img className="NotFoundMinion" src={Image} alt="NotFoundMinion"/>
          <img className="NotFoundMinion2" src={Image2} alt="NotFoundMinion2"/>
        </div>
      </section>
    );
  }
}

export default NotFoundRoute
