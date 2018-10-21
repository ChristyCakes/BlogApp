import React from 'react';
import Nav from './nav';

const Author = (props) => {
    let authorblogs = [];
    (props.authorblogs).forEach(item => {
        authorblogs.push(
            <h4>{item.blogtitle}</h4>
        )
    })
    return (
        <div>
            <Nav />
            <h1>Blogs by {props.authorname}</h1>
            <hr />
            <div>{authorblogs}</div>

        </div>
    )
}

export default Author;