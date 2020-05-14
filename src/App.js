import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Register";
import Sell from "./components/Sell";
import About from "./components/AboutPage";
import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
    render() {
        return (
            <AuthProvider>
                <Router>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={SignUp} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/home" component={Home} />
                        <Route path="/ab" component={About} />
                        <PrivateRoute Route path="/sell" component={Sell} />
                    </div>
                </Router>
            </AuthProvider>
        );
    }
}

export default App;
