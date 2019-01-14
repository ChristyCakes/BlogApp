import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Featured = (props) => {
    return (
        <div className="card col-3">
            <img className="card-img-top my-3" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <p className="card-title text-secondary">{props.title}</p>
                <Link to={`/blog/${props.blogid}`} className="btn btn-info">Read More</Link>
            </div>
        </div>
    )
}

export default Featured;