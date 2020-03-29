import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Register";
import Sell from "./components/Sell";
import { AuthProvider } from "./config/Auth";


class App extends Component {
    render() {
        return (
            <AuthProvider>
                <Router>
                    <div>
                        <Route exact path="/" component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={SignUp} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/home" component={Home} />
                        <Route path="/sell" component={Sell} />
                    </div>
                </Router>
            </AuthProvider>
        );
    }
}

export default App;
