import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './nav';

const Authors = (props) => {
    let authorDisplay = [];
    (props.authors).forEach(item => {
        authorDisplay.push(
            <div key = {item.id}>
            <Link className="textlink" to={{
                pathname: `/author/${item.id}`,
                state: { authorname: item.name },
                style: { textDecoration: 'none' }
            }}>
            <h4>{item.name}</h4>
            </Link>
            <p>{item.email}</p>
            <hr />
            </div>
        );
    });

    return (
        <div>
            <Nav />
            <h2 className="text-secondary text-center mt-5">Rainy Day Authors</h2>
            <div>{authorDisplay}</div>
        </div>
    );
};

export default Authors;