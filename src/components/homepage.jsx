import React, { Component } from "react";
import "./homepage.css";
import marketplace from "./marketplace.jpg";
class Homepage extends Component {
  render() {
    return (
      <div
        className="app"
        style={{
          backgroundImage: `url(${marketplace})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default Homepage;
