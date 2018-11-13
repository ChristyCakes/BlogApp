import React, { Component } from 'react';
import 'isomorphic-fetch';
import Nav from '../home/nav';

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            content: ""
        };
        this.postblog = this.postblog.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    };

    inputHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    postblog(event) {
        event.preventDefault();
        fetch('http://127.0.0.1:3000/api/blogs/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author: this.props.location.state.name,
                // authorid: this.props.location.state.id,
                title: this.state.title,
                content: this.state.content,
            })
        })
            .then(response => response.json())
            .then(promise => promise.id)
            .then(id => {return this.props.history.push(`blog/${id}/`)})
            .catch(err => {
                alert("Error: Your blog was not created");
                console.log(err)
            });
    };

    render() {
        return (
            <div>
                <Nav />
                <h1>Create a Blog Post</h1>
                <h3>Author: {this.props.location.state.name}</h3>
                <form action="">
                    <input
                        type="text"
                        placeholder="Title"
                        size="70"
                        id="title"
                        name="title"
                        onChange={this.inputHandler}
                        defaultValue={this.state.title}
                    />
                    <textarea
                        type="text"
                        placeholder="Blog Body"
                        cols="100"
                        rows="20"
                        id="content"
                        name="content"
                        onChange={this.inputHandler}
                        defaultValue={this.state.content}
                    />
                    <button
                        onClick={this.postblog}
                        id="create">
                        Create
                    </button>
                </form>
            </div>
        );
    };
};

export { Write };