import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

class DashboardRoute extends Component {
  state = {
  };

  render() {
    return (
      <section className="DashContainer">
        <Link
        to='/learn'
        > LEARN SOME SHIT NOOB
        </Link>
      </section>
    );
  }
}

export default DashboardRoute;