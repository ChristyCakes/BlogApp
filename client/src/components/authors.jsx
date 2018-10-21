import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './nav';

const Authors = (props) => {
    let authorDisplay = [];
    (props.authors).forEach(item => {
        authorDisplay.push(
            <div key = {item.id}>
            <Link to={{
                pathname: `/author/${item.id}`,
                state: { authorname: item.name },
                style: { textDecoration: 'none' }
            }}>
            <h1>{item.name}</h1>
            </Link>
            <p>{item.email}</p>
            </div>
        );
    });

    return (
        <div>
            <Nav />
            <div>Rainy Day Authors</div>
            <div>{authorDisplay}</div>
        </div>
    );
};

export default Authors;