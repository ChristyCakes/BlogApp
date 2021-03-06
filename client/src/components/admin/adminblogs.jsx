import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AdminBlogs = (props) => {
    let adminblogs = [];
    (props.adminblogs).forEach(element => {
        adminblogs.push(
            <div className='flexrow baseline'>
                <Link className="link aqua center" to={`/blog/${element.blogid}`}><h4>{element.blogtitle}</h4></Link>               
                <Link to={{
                    pathname: `/edit/${element.blogid}`,
                    state: { ...element }
                }}
                    className="btn btn-secondary minibutton ml-2">Edit</Link>
                <Link to={{
                    pathname: `/delete/${element.blogid}`,
                    state: { ...element }
                }}
                    className="btn btn-secondary minibutton ml-1">Del</Link>
            </div>
        )
    })
    return (
        <div>
            <hr />
            <div >{adminblogs}</div>
        </div>
    )
}

export default AdminBlogs;