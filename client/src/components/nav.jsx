import React from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';
import { AuthButton } from './auth';

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to="/" className="btn btn-info m-1">Home</Link>
            <Link to="/blogs" className="btn btn-info m-1">Blogs</Link>
            <Link to="/authors" className="btn btn-info m-1">Authors</Link>
            <AuthButton />
        </div>
    )
}

export default Nav;