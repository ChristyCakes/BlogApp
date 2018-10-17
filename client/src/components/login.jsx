import React, { Component } from 'react';
import 'isomorphic-fetch';
import Write from './write';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: ""
        }
        this.postauthor = this.postauthor.bind(this)
        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    postauthor(event) {
        event.preventDefault();
        fetch('http://127.0.0.1:3000/api/authors/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email
            })
        })
            .then(() => {
                return this.props.history.push({
                    pathname: '/write',
                    state: { name: this.state.name }
                })
            })
            .catch(err => {
                alert("Error: Author name was not created");
                console.log(err)
            })

    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1>Enter the Author's Name</h1>
                <form action="">
                    <input
                        type="text"
                        placeholder="First and Last Name"
                        size="20"
                        id="author"
                        name="name"
                        onChange={this.inputHandler}
                        defaultValue={this.state.name}
                    />
                    <input
                        type="text"
                        placeholder="Email Address"
                        size="30"
                        name="email"
                        onChange={this.inputHandler}
                        defaultValue={this.state.email}
                    />
                    <button
                        onClick={this.postauthor}
                        id="submit">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;