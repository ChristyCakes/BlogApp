import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Blogs = (props) => {
    let blogDisplay = [];
    (props.blogs).forEach(item => {
        blogDisplay.push(
            <div key={item.id}>
                <Link to={`blog/${item.id}`} style={{ textDecoration: 'none' }}>
                    <h1>{item.title}</h1>
                </Link>
                <p>By {item.author}</p>
            </div>
        )
    })

    return (
        <div>
            <Link to="/">Home</Link>
            <div>{blogDisplay}</div>
            {/* <Link to={{
                pathname: `/${props.id}/edit`,
                state: {
                    user: props.user,
                    text: props.text
                }
            }}>
            </Link> */}
        </div>
    )
}

export default Blogs;