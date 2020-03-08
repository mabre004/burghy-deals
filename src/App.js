import React, { Component } from "react";
// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";//yarn add react-router-dom

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";





class App extends Component {


    render() {
        return (
            <div>
                {/* {this.state.user ? (<Home />) : (<Login />)} */}
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />

                    </Switch>
                </Router>

            </div>
        );
    }
}
export default App;

// export default App;
