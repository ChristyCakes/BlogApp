import React, { Component } from 'react';
import 'isomorphic-fetch';
import Nav from '../home/nav';
import * as blogsService from '../../services/blogs';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: "",
            title: "",
            content: ""
        };
        this.putblog = this.putblog.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    };

    inputHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    putblog(event) {
        event.preventDefault();
        blogsService.update(this.props.location.state.blogid, {

            author: this.props.location.state.author,
            title: this.state.title,
            content: this.state.content,

        })
            .then(() => this.props.history.push(`/blog/${this.props.location.state.blogid}`))
            .catch(err => {
                alert("Error: Your blog was not created");
                console.log(err)
            });
    };

    render() {
        return (
            <div>
                <Nav />
                <h1>Edit Your Blog Post</h1>
                <h3>Author: {this.props.location.state.author}</h3>
                <form action="">
                    <input
                        type="text"
                        placeholder="Title"
                        size="70"
                        id="title"
                        name="title"
                        onChange={this.inputHandler}
                        defaultValue={this.props.location.state.blogtitle}
                    />
                    <textarea
                        type="text"
                        placeholder="Blog Body"
                        cols="100"
                        rows="20"
                        id="content"
                        name="content"
                        onChange={this.inputHandler}
                        defaultValue={this.props.location.state.content}
                    />
                    <button
                        onClick={this.putblog}
                        id="update">
                        Update
                    </button>
                </form>
            </div>
        );
    };
};

export { Edit };