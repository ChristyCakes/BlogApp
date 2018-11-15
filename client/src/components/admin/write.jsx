// set style with styles.css -- change the repeats in bootstrap styles

import React, { Component } from 'react';
import Nav from '../home/nav';
import * as blogsService from '../../services/blogs';

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
        blogsService.insert({
            author: this.props.location.state.author,
            title: this.state.title,
            content: this.state.content
        })
            .then(response => { return this.props.history.push(`blog/${response.blogid}/`) })
            .catch(err => {
                alert("Error: Your blog was not created");
                console.log(err)
            });
    };

    render() {
        return (
            <div>
                <Nav />
                <h1>Create a New Blog Post</h1>
                <h3>Author: {this.props.location.state.author}</h3>
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