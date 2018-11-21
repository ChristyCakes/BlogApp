import React, { Component } from 'react';
import Nav from '../home/nav';
import AdminBlogContainer from './adminblogcontainer'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.location.state.me.id,
            author: this.props.location.state.me.name
        }
    }

    render() {
        return (
            <div className="flexcol center">
                <Nav />
                <h1 className="heading">Your Blog Posts</h1>
                <AdminBlogContainer {...this.state} />
                <Link to={{
                    pathname: '/write',
                    state: { ...this.state }
                }}
                    className="btn btn-outline-secondary mt-4"
                >Create a New Blog Post</Link>
            </div>
        )
    }
}

export { Admin };