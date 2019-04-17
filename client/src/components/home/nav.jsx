import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AuthButton } from '../auth';

const Nav = () => {
    return (
        <div className='flexrow center'>
            <Link to="/" className="btn btn-info m-1">Home</Link>
            <Link to="/blogs" className="btn btn-info m-1">Blogs</Link>
            <Link to="/authors" className="btn btn-info m-1">Authors</Link>
            <AuthButton />
        </div>
    )
}

export default Nav;