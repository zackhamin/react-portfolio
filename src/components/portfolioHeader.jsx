import React, { Component } from "react";
import signature from "../images/signature.png";

class PortfolioHead extends Component {
  state = {};

  render() {
    return (
      <div>
        <h2
          style={{
            height: 200,
            width: 500,
            padding: 50,
            fontSize: 50,
            fontFamily: "Sriracha, cursive",
          }}
        >
          {" "}
          Ishaq Amin
        </h2>
      </div>
    );
  }
}

export default PortfolioHead;
