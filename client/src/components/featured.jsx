import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import reactlogo from './images/react.png'
import coast from './images/coast.jpg'
import fire from './images/fireplace.jpg';

const Featured = (props) => {
    return (
        <div>
            <h2 className="text-info text-center mt-5">Featured Blogs</h2>
            <div className="cards">
                <div className="card col-3">
                    <img className="card-img-top width: 10%" src={reactlogo} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">How I Learned React</h5>
                        <Link to="/blog/4" className="btn btn-info">Read More</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <img className="card-img-top" src={fire} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Winter Stories to Warm the Heart</h5>
                        <Link to="/blog/9" className="btn btn-info">Read More</Link>
                    </div>
                </div>
                <div className="card col-3">
                    <img className="card-img-top" src={coast} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Adventures in California</h5>
                        <Link to="/blog/5" className="btn btn-info">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;