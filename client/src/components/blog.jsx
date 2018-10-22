import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './nav';

const Blog = (props) => {
    return (
        <div>
            <Nav />
            <h1>{props.blog.title}</h1>
            <h4>By {props.blog.author}</h4>
            <p>{props.blog.content}</p>
        </div>
    )
}

export default Blog;