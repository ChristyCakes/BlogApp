import React, { Component } from 'react';
import * as blogsService from '../../services/blogs';

class Delete extends Component {

    componentDidMount() {
        if (confirm("Confirm Delete")) {
            blogsService.destroy(this.props.location.state.blogid)
                .then(() => this.props.history.push('/api/users/me'))
                .catch(err => {
                    alert("Error: Chirp not deleted");
                    console.log(err);
                })
        } else {
            this.props.history.goBack();
        }
    }

    render() { return null }
}

export { Delete };