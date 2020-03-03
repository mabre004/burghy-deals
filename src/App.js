import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';//yarn add react-router-dom
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />

                </Switch>
            </Router>
        </div>
    );
};

export default App;