import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Sell from './components/Sell';
const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/sell" component={Sell} />

                </Switch>
            </Router>
        </div>
    );
};

export default App;