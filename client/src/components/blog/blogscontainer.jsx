import React, { Component } from 'react';
import Blogs from './blogs';
import * as blogsService from '../../services/blogs';

class BlogsContainer extends Component {
    constructor() {
        super();
        this.state = { blogs: [] }
    }

    componentDidMount() {
        blogsService.all()
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