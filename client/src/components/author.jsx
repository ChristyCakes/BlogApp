import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Author = (props) => {
    let authorblogs = [];
    (props.authorblogs).forEach(item => {
        authorblogs.push(
            <h4>{item.blogtitle}</h4>
        )
    })
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Blogs by {props.authorname}</h1>
            <hr />
            <div>{authorblogs}</div>

        </div>
    )
}

export default Author;