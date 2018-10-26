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
            <h1 className="text-secondary text-center mt-5">Blogs by {props.authorname}</h1>
            <hr />
            <div className="text-info text-center">{authorblogs}</div>

        </div>
    )
}

export default Author;