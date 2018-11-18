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
                <h1 className='heading mb-3 marginleft10'>Create a New Blog Post</h1>
                <h4 className='white mb-3 marginleft10'>Author: {this.props.location.state.author}</h4>
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
                    <div className='flexrow flexend'>
                        <textarea
                            type="text"
                            placeholder="Content"
                            cols="100"
                            rows="20"
                            id="content"
                            name="content"
                            onChange={this.inputHandler}
                            defaultValue={this.state.content}
                        />
                        <button
                            className='btn btn-info ml-1'
                            onClick={this.postblog}
                            id="create">
                            Create
                    </button>
                    </div>
                </form>
            </div>
        );
    };
};

export { Write };