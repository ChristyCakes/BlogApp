import React, { Component } from 'react';
import Blog from './blog';
import * as blogsService from '../services/blogs';

class BlogContainer extends Component {
    constructor() {
        super();
        this.state = { blog: [] }
    }

    componentDidMount() {
        blogsService.one(this.props.match.params.id)
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