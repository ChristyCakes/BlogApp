import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import GoodbyeWorld from './goodbye';
import '../styles.css';
import { BlogContainer } from './blogcontainer';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/goodbye">Goodbye</Link>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                        <Route path="/blogcontainer" component={BlogContainer} />
                        {/* <Route path="/authors" component={Authors} />
                        <Route path="/write" component={Write} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;