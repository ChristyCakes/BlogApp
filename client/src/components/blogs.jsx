import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './nav';

const Blogs = (props) => {
    let blogDisplay = [];
    (props.blogs).forEach(item => {
        blogDisplay.push(
            <div key={item.id}>
                <Link to={`/blog/${item.id}`} style={{ textDecoration: 'none' }}>
                    <h4>{item.title}</h4>
                </Link>
                <h5>By {item.author}</h5>
                <hr />
            </div>
        );
    });

    return (
        <div>
            <Nav />
            <div>Rainy Day Blogs</div>
            <div>{blogDisplay}</div>
        </div>
    );
};

export default Blogs;