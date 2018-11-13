import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BlogsContainer, BlogContainer, AuthorsContainer, AuthorContainer, Write, Home } from './components';
import { Admin, Edit } from './components/admin'
import { PrivateRoute, Login, Logout } from './components/auth';
import './styles.css';

class App extends Component {

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
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute path="/api/users/me" component={Admin} />
                        <PrivateRoute path="/write" component={Write} />
                        <PrivateRoute path="/edit/:id" component={Edit} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;