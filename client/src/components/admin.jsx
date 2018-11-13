import React, { Component } from 'react';
import { meData } from '../services/user'
import Nav from './nav';
import AdminBlogContainer from './adminblogcontainer'


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: meData.id,
            name: meData.name,
            blogs: []
        }
    }

    render() {
        console.log(meData)
        return (
            <div>
                <Nav />
                <h2 className="text-secondary text-center mt-5">Your Blogs</h2>
                <hr/>
                <AdminBlogContainer id={this.state.id} />
            </div>
        )
    }
}

export { Admin };