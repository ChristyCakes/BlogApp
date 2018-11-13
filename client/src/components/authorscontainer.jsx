import React, { Component } from 'react';
import Authors from './authors';
import * as authorsService from '../services/authors';

class AuthorsContainer extends Component {
    constructor() {
        super();
        this.state = { authors: [] }
    }

    componentDidMount() {
            authorsService.all()
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