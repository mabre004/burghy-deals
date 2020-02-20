/* eslint-disable import/first */
import React, { Component } from "react";
export { Login } from "./Login";
import hands from "./hand.png";
import "./style.css";


class Login extends Component {

    render() {
        return <div className="App" style={{
            backgroundImage: `url(${hands})`, backgroundPosition: "center",
            backgroundSize: "cover",
            
        }}>
            <header className="App-header">
                <p1>Welcome to </p1>
                <p1>BurghyDeals</p1>
                <div className="LoginBox">

                    <div className="Email">
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your SUNY Plattsburgh email"
                        ></input>
                    </div>
                    <div className="Password" >

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        ></input>
                    </div>
                    <div className="submit">
                        <button > Submit </button>
                    </div>
                    {/* <a
                        className="App-link"
                        href="https://plattsburgh.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb" }}
                    >
                        Go to myPlattsburgh?
        </a> */}
                </div>


            </header>
        </div>;

    }
}

export default Login;

