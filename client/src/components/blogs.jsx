import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './nav';

const Blogs = (props) => {
    let blogDisplay = [];
    (props.blogs).forEach(item => {
        blogDisplay.push(
            <div key={item.id}>
                <Link className="textlink" to={`/blog/${item.id}`}>
                    <h4 >{item.title}</h4>
                </Link>
                <h5>By {item.author}</h5>
                <hr />
            </div>
        );
    });

    return (
        <div>
            <Nav />
            <h2 className="text-secondary text-center mt-5">Rainy Day Blogs</h2>
            <div>{blogDisplay}</div>
        </div>
    );
};

export default Blogs;