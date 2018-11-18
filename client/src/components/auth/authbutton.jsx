import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        return (
        <div>
        <Link className="btn btn-info m-1" to="/logout">Logout</Link>
        <Link className='btn btn-info m-1' to='/api/users/me'>My Posts</Link>
        </div>
        );
    } else {
        return <Link className="btn btn-info m-1" to="/login">Login</Link>;
    }
};

export { AuthButton };