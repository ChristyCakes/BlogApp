import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-white" >Rainy Day Blog</h1>
                    <p className="lead text-white">Curl up with a blanket and some coffee and read for hours</p>
                </div>
            </div>
            <Link to="/blogcontainer">Blogs</Link>
            {/* <Link to="/authors">Authors</Link>
            <Link to="/write">Write Your Own</Link> */}
            </div>
        )
    }
}

export default Home;