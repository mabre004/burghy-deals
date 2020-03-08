import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Register";
import { AuthProvider } from "./config/Auth";


const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={SignUp} />
                    <Route path="/signup" component={SignUp} />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
