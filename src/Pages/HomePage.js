import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <section className="container">
        <h1>Home</h1>
        <p>This is the my Homepage.</p>
        <Link className="btn btn-primary btn-lg" to="/dramas">
          View Drama List
        </Link>
      </section>
    );
  }
}

export default HomePage;
