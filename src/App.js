import React, { Component } from 'react';
// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';//yarn add react-router-dom
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import fire from "./config/fire";


class App extends Component {

    constructor(props) {
        super(props);
        this.setState = {
            user: {},
        }
    }
    componentDidMount() {
        this.authListner();
    }

    authListner() {
        fire.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({ user });

            }
            else {
                this.setState({ user: null });

            }
        }

        );
    }
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