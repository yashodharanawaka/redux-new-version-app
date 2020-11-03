import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div>
        <div className="spinner-border" role="status"></div>
        <p>loading...</p>
      </div>
    );
  }
}

export default Loading;
