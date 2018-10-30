import React, { Component } from 'react';
import * as authorsService from '../services/authors';
import AdminBlogs from './adminblogs';
import Nav from './nav';

class Admin extends Component {
    constructor() {
        super();
        this.state = { blogs: [] }
    }

    // gotta get author id ?????
    // componentDidMount() {
    //     authorsService.one(this.props.location.state.name)
    //         .then(data => {
    //             this.setState({ blogs: data })
    //         })
    //         .catch(err => {
    //             alert("Your blogs failed to load")
    //             console.log(err);
    //         })
    // }

    render() {
        return (
            
            <div>
                <Nav />
                <h3>Blogs by: </h3>
        {/* <AdminBlogs blogs={...this.state} /> */}
        {/* <NewBlog /> */}
        </div>
        )
    }
}

export { Admin };