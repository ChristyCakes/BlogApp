import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Blog = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>{props.blog.title}</h1>
            <h4>By {props.blog.author}</h4>
            <p>{props.blog.content}</p>
        </div>
    )
}

export default Blog;