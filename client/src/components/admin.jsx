import React, { Component } from 'react';
import * as authorsService from '../services/authors';
import AdminBlogs from './adminblogs';
import {meData} from '../services/user'
import Nav from './nav';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: meData.id,
            name: meData.name,
            blogs: [] }
    }

    
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
                <h3>Blogs by: {this.state.name}</h3>
        {/* <AdminBlogs blogs={...this.state} /> */}
        {/* <NewBlog /> */}
        </div>
        )
    }
}

export { Admin };