import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateprogress';
import Nav from '../home/nav';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true,
            me: ''
        };
    }

    componentDidMount() {
        userService.checkLogin()
            .then((loggedIn) => {
                if (loggedIn) {
                    this.setState({ redirectToReferrer: true, checkingLogin: false });
                } else {
                    this.setState({ checkingLogin: false });
                }
            });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
            .then((data) => {
                this.setState({ redirectToReferrer: true });
            }).catch((err) => {
                if (err.message) {
                    this.setState({ feedbackMessage: err.message });
                }
            });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/api/users/me', state: { ...this.state } } };
        const { redirectToReferrer, checkingLogin } = this.state;

        if (checkingLogin) {
            return <IndeterminateProgress message="Checking Login Status..." />;
        }
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <Fragment>
                <Nav />
                <h2 className="heading center">Login to continue</h2>
                <form className="center" onSubmit={(e) => this.login(e)}>
                    <div className="form-group">
                        <input
                            placeholder="Email"
                            id="email"
                            className="col-3"
                            type="email"
                            onChange={(e) => this.handleEmailChange(e.target.value)} 
                            required 
                            />
                    </div>
                    <div className="form-group">
                        <input
                            placeholder="Password"
                            id="password"
                            className="col-3"
                            type="password"
                            onChange={(e) => this.handlePasswordChange(e.target.value)}
                            required
                            />
                    </div>
                    {this.state.feedbackMessage ? (
                        <p>{this.state.feedbackMessage}</p>
                    ) : null}
                    <input type="submit" value="Login" className="btn btn-info btn-sm" />
                </form>
            </Fragment>
        );
    }
}

export { Login };