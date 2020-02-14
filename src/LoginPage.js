import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Burghy Deals users. Welcome!!!</p>
        <div className="LoginBox">
          <div className="Username">
            <div htmlFor="username"> Username: </div>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
            ></input>
          </div>
          <div className="Password">
            <div htmlFor="password"> Password: </div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            ></input>
          </div>
        </div>

        <a
          className="App-link"
          href="https://plattsburgh.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to my plattsburgh?
        </a>
      </header>
    </div>
  );
}

export default App;
