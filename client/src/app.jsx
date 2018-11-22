import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BlogsContainer, BlogContainer } from './components/blog';
import { Admin, Edit, Write, Delete } from './components/admin'
import { PrivateRoute, Login, Logout, Register } from './components/auth';
import { AuthorContainer, AuthorsContainer } from './components/author';
import Home from './components/home/home';
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
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/admin" component={Admin} />
                        <PrivateRoute path="/write" component={Write} />
                        <PrivateRoute path="/edit/:id" component={Edit} />
                        <PrivateRoute path="/delete/:id" component={Delete} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;