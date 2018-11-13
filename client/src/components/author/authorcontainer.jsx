import React, { Component } from 'react';
import Author from './author';
import * as authorsService from '../../services/authors';

class AuthorContainer extends Component {
    constructor() {
        super();
        this.state = { authorblogs: [] }
    }

    componentDidMount() {
        authorsService.one(this.props.match.params.id)
            .then(data => { this.setState({ authorblogs: data[0] }) })
            .catch(err => {
                alert("Author's blogs failed to load")
                console.log(err);
            })
    }

    render() {
        return <Author authorblogs={this.state.authorblogs} authorname={this.props.location.state.authorname}/>
    }
}

export { AuthorContainer };