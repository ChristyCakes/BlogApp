import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Nav from './nav';


const AdminBlogs = (props) => {
        let adminblogs = [];
        (props.adminblogs).forEach(item => {
            adminblogs.push(
                <h4>{item.blogtitle}</h4>
            )
        })
        return <div className="text-info text-center">{adminblogs}</div>
    }

export default AdminBlogs;