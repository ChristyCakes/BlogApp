import React, { Component } from 'react';
import Nav from '../home/nav';
import * as blogsService from '../../services/blogs';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.blogtitle,
            content: this.props.location.state.content
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
            <div className='flexcol'>
                <Nav />
                <h1 className='heading mb-3 marginleft10'>Edit Your Blog Post</h1>
                <hr></hr>
                <h4 className='white marginleft10 mb-2'>Author: {this.props.location.state.author}</h4>
                <form>
                    <label className='white mr-2' for="title"><h4>Title:</h4></label>
                    <input
                        type="text"
                        placeholder="Title"
                        size="70"
                        id="title"
                        name="title"
                        onChange={this.inputHandler}
                        defaultValue={this.props.location.state.blogtitle}
                    />
                    <label className='white flexcol' for="content"><h4>Content:</h4></label>
                    <div className='flexrow flexend'>
                        <textarea
                            type="text"
                            placeholder="Content"
                            cols="100"
                            rows="20"
                            id="content"
                            name="content"
                            onChange={this.inputHandler}
                            defaultValue={this.props.location.state.content}
                        />
                        <button
                            className='btn btn-info ml-1'
                            onClick={this.putblog}
                            id="update">
                            Update
                    </button>
                    </div>

                </form>
            </div>
        );
    };
};

export { Edit };