import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = () => {
    if (isLoggedIn()) {
        return (
            <div>
                <Link className="btn btn-info m-1" to="/logout">Logout</Link>
                <Link className='btn btn-info m-1' to={{ pathname: '/admin' }}
                    >My Blogs</Link>
            </div>
        );
    } else {
        return (
            <div>
                <Link className="btn btn-info m-1" to="/login">Login</Link>
                <Link className="btn btn-info m-1" to="/register">Register</Link>
            </div>
        )
    }
};

export { AuthButton };