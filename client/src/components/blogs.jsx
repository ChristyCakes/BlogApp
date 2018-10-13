import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Blogs = (props) => {
    return (
        <div>
            <Link to="/" className="homelink" style={{ textDecoration: "none" }}>Home</Link>
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