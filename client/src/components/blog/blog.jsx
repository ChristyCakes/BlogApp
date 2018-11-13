import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from '../nav';

const Blog = (props) => {
    return (
        <div>
            <Nav />
            <div className="singleblog">
            <h1 className="text-secondary mt-5">{props.blog.title}</h1>
            <h4 className="text-info">By {props.blog.author}</h4>
            <p className="">{props.blog.content}</p>
            </div>
        </div>
    )
}

export default Blog;