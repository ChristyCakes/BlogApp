import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AdminBlogs = (props) => {
    let adminblogs = [];
    (props.adminblogs).forEach(element => {
        adminblogs.push(
            <div className='horiz align'>
                <h4>{element.blogtitle}</h4>
                <Link to={{
                    pathname: `/edit/${element.blogid}`,
                    state: { ...element }
                }}
                    className="btn btn-secondary edit">Edit</Link>
                <Link to={{
                    pathname: `/delete/${element.blogid}`,
                    state: { ...element }
                }}
                    className="btn btn-secondary delete">Del</Link>
            </div>
        )
    })
    return (
        <div className="text-info text-center">
            <div>{adminblogs}</div>
            <div><Link to={{
                pathname: '/write',
                state: { ...props.adminblogs[0]}
            }} 
            className="btn btn-outline-secondary mt-4"
            >Create a New Blog Post</Link>           </div>
        </div>)
}

export default AdminBlogs;