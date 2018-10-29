import React from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import { AuthButton } from './auth';

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to="/" className="btn btn-info">Home</Link>
            <Link to="/blogs" className="btn btn-info">Blogs</Link>
            <Link to="/authors" className="btn btn-info">Authors</Link>
            <AuthButton />
            <Link to="/login" className="btn btn-info">Become a Blogger</Link>
        </div>
    )
}

export default Nav;