import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateprogress';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedOut: false
        };
    }

    componentDidMount() {
        userService.logout();
        this.setState({ loggedOut: true });
        localStorage.clear();
        alert("LogOut Successful")
    }

    render() {
        if (this.state.loggedOut) {
            return <Redirect to="/" />;
        } else {
            return <IndeterminateProgress message="Logging Out..." />
        }
    }
}

export { Logout }