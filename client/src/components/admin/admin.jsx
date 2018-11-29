import React, { Component } from 'react';
import Nav from '../home/nav';
import AdminBlogContainer from './adminblogcontainer'
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Admin = (props) => {
    return (
        <div className="flexcol center">
            <Nav />
            <h1 className="heading">Your Blog Posts</h1>
            <AdminBlogContainer />
            <Link to='/write' className="btn btn-outline-secondary mt-4">Create a New Blog Post</Link>
        </div>
    )
}

export { Admin };