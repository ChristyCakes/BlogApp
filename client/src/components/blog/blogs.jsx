import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from '../home/nav';

const Blogs = (props) => {
    let blogDisplayEvens = [];
    let blogDisplayOdds = [];
    (props.blogs).forEach((element, index) => {
        if (index % 2 === 0) {
            blogDisplayEvens.push(
                <div className = "col-md-6" key={element.id}>
                    <Link className="link aqua" to={`/blog/${element.id}`}>
                        <h4 >{element.title}</h4>
                    </Link>
                    <h5 className="white">By {element.author}</h5>
                    <hr />
                </div>
            )} else {
            blogDisplayOdds.push(
                <div className = "col-md-6" key={element.id}>
                    <Link className="link aqua" to={`/blog/${element.id}`}>
                        <h4 >{element.title}</h4>
                    </Link>
                    <h5 className="white">By {element.author}</h5>
                    <hr />
                </div>
            )}
    });

    return (
        <div>
            <Nav />
            <h2 className="heading text-center mb-5">Rainy Day Blogs</h2>
            <div className="row mx-5">{blogDisplayEvens}{blogDisplayOdds}</div>
        </div>
    );
};

export default Blogs;