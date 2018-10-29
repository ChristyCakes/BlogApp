import React, { Component } from 'react';
// import 'isomorphic-fetch';
import Blogs from './blogs';
import * as blogsService from '../services/blogs';

class BlogsContainer extends Component {
    constructor() {
        super();
        this.state = { blogs: [] }
    }

    componentDidMount() {
        blogsService.all()
        // fetch('http://127.0.0.1:3000/api/blogs/')
            .then(response => response.json())
            .then(data => {
                this.setState({ blogs: data })
            })
            .catch(err => {
                alert("Blogs failed to load")
                console.log(err);
            })
    }

    render() {
        return <Blogs blogs={this.state.blogs} />
    }
}

export { BlogsContainer };