// make each featured blog one component, send props to

import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import reactlogo from '../images/react.png'
import coast from '../images/coast.jpg'
import fire from '../images/fireplace.jpg';

const Featured = (props) => {
    return (
        <div>
            <h2 className="heading center">Featured Blogs</h2>
            <div className="cards flexrow flexend">
                <div className="card col-3">
                    <img className="card-img-top my-3" src={reactlogo} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-secondary">How I Learned React</h5>
                        <Link to="/blog/4" className="btn btn-info">Read More</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <img className="card-img-top my-3" src={fire} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-secondary">Winter Stories to Warm the Heart</h5>
                        <Link to="/blog/9" className="btn btn-info">Read More</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <img className="my-3 card-img-top" src={coast} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-secondary">Adventures in California</h5>
                        <Link to="/blog/5" className="btn btn-info">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;