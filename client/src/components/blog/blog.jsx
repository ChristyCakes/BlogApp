import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from '../home/nav';

const Blog = (props) => {
    return (
        <div>
            <Nav />
            <div className="marginleft10">
            <h1 className="heading">{props.blog.title}</h1>
            <h4 className="white">By {props.blog.author}</h4>
            <p className="">{props.blog.content}</p>
            </div>
        </div>
    )
}

export default Blog;