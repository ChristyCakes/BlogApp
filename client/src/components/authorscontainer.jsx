import React, { Component } from 'react';
// import 'isomorphic-fetch';
import Authors from './authors';
import * as authorsService from '../services/authors';

class AuthorsContainer extends Component {
    constructor() {
        super();
        this.state = { authors: [] }
    }

    componentDidMount() {
            authorsService.all()
        // fetch('http://127.0.0.1:3000/api/authors/')
            // .then(response => response.json())
            .then(data => {
                this.setState({ authors: data })
            })
            .catch(err => {
                alert("Authors failed to load")
                console.log(err);
            })
    }

    render() {
        return <Authors authors={this.state.authors} />
    }
}

export { AuthorsContainer };