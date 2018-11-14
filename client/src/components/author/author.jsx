import React from 'react';
import Nav from '../home/nav';

const Author = (props) => {
    let authorblogs = [];
    (props.authorblogs).forEach(element => {
        authorblogs.push(
            <div>
                <h4>{element.blogtitle}</h4>
            </div>
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