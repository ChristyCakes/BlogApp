import React, { Component } from 'react';
import AdminBlogs from './adminblogs';
import * as authorsService from '../../services/authors';

class AdminBlogContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { adminblogs: [] }
    }

    componentDidMount() {
        let meData = JSON.parse((localStorage.getItem("me")))
        authorsService.one(meData.id)
            .then(data => { this.setState({ adminblogs: data[0] }) })
            .catch(err => {
                alert("Author's blogs failed to load")
                console.log(err);
            })
    }

    render() {
        return  <AdminBlogs {...this.state }/>
    }
}

export default AdminBlogContainer;