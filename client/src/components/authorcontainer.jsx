import React, { Component } from 'react';
import 'isomorphic-fetch';
import Author from './author';

class AuthorContainer extends Component {
    constructor() {
        super();
        this.state = { authorblogs: [] }
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:3000/api/authors/${this.props.match.params.id}`)
            .then(response => response.json())
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