import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const AdminBlogs = (props) => {
    console.log(props)
    let adminblogs = [];
    (props.adminblogs).forEach(element => {
        adminblogs.push(
            <div className='horiz'>
                <h4>{element.blogtitle}</h4>
                <Link to={{ 
                    pathname: `/edit/${element.blogid}`,
                    state: { ...props }
                }}
                    className="text-secondary">Edit</Link>
            </div>
        )
    })
    return <div className="text-info text-center">{adminblogs}</div>
}

export default AdminBlogs;