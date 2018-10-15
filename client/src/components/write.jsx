import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { render } from 'react-dom';
import 'isomorphic-fetch';

class Write extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            content: ""
        }
        this.postblog = this.postblog.bind(this)
        this.inputHandler = this.inputHandler.bind(this)
    }

    inputHandler(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    postblog(event) {
        event.preventDefault();
        fetch('http://127.0.0.1:3000/api/blogs/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                author: this.state.author,
                title: this.state.title,
                content: this.state.content,
            })
        })
            .then(response => response.json())
            .then(promise => promise.id)
            // .then(function(id) {
            //     return this.props.history.push(`/blog/${id}`)}.bind(this))
            .then(id => {return this.props.history.push(`blog/${id}/`)})
            .catch(err => {
                alert("Error: Your blog was not created");
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1>Create a Blog Post</h1>
                <form action="">
                    <input
                        type="text"
                        placeholder="Author"
                        size="20"
                        id="author"
                        name="author"
                        onChange={this.inputHandler}
                        defaultValue={this.state.author}
                    />
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
        )
    }
}

export default Write;