import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './nav';

const Authors = (props) => {
    let authorDisplayEvens = [];
    let authorDisplayOdds = [];
    (props.authors).forEach((element, index) => {
        if (index %2 === 0) {
            authorDisplayEvens.push(
                <div className = "col-md-6" key = {element.id}>
                <Link className="textlink" to={{
                    pathname: `/author/${element.id}`,
                    state: { authorname: element.name },
                    style: { textDecoration: 'none' }
                }}>
                <h4>{element.name}</h4>
                </Link>
                <p>{element.email}</p>
                <hr />
                </div>
            );
        } else {
            authorDisplayOdds.push(
                <div className = "col-md-6" key = {element.id}>
                <Link className="textlink" to={{
                    pathname: `/author/${element.id}`,
                    state: { authorname: element.name },
                    style: { textDecoration: 'none' }
                }}>
                <h4>{element.name}</h4>
                </Link>
                <p>{element.email}</p>
                <hr />
                </div>
            );
        }
        
    });

    return (
        <div>
            <Nav />
            <h2 className="text-secondary text-center my-5">Rainy Day Authors</h2>
            <div className="row mx-5">{authorDisplayEvens}{authorDisplayOdds}</div>
        </div>
    );
};

export default Authors;