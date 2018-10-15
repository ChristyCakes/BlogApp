import React, { Component } from 'react';
import 'isomorphic-fetch';
import Blog from './blog';

class BlogContainer extends Component {
    constructor() {
        super();
        this.state = { blog: [] }
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:3000/api/blogs/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ blog: data })
            })
            .catch(err => {
                alert("Blog failed to load")
                console.log(err);
            })
    }

    render() {
        return <Blog blog={this.state.blog} />
    }
}

export { BlogContainer };