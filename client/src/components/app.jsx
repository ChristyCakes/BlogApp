import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import '../styles.css';
import { BlogContainer } from './blogcontainer';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/blogs" component={BlogContainer} />
                        {/* <Route path="/authors" component={Authors} />
                        <Route path="/write" component={Write} /> */}
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;