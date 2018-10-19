import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../styles.css';
import { BlogsContainer } from './blogscontainer';
import { BlogContainer } from './blogcontainer';
import { AuthorsContainer } from './authorscontainer';
import { AuthorContainer } from './authorcontainer'
import Home from './home';
import Write from './write';
import Login from './login';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/blogs" component={BlogsContainer} />
                        <Route path="/authors" component={AuthorsContainer} />
                        <Route path="/blog/:id" component={BlogContainer} />
                        <Route path="/author/:id" component={AuthorContainer} />
                        <Route path="/login" component={Login} />
                        <Route path="/write" component={Write} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;