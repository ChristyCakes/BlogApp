import React from 'react';
import Nav from '../home/nav';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Author = (props) => {
    let authorblogs = [];
    (props.authorblogs).forEach(element => {
        authorblogs.push(<Link className="aqua center link" to={`/blog/${element.blogid}`}><h4>{element.blogtitle}</h4></Link>)
    })
    return (
        <div>
            <Nav />
            <h1 className="heading center">Blogs by {props.authorname}</h1>
            <hr />
            <div>{authorblogs}</div>

        </div>
    )
}

export default Author;