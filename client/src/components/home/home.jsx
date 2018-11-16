import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Featured from './featured';
import Nav from './nav';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 white" >Rainy Day Blog</h1>
                        <p className="lead white">Curl up with a blanket and some coffee and read for hours</p>
                    </div>
                </div>
                <Nav />
                <Featured />
            </div>
        )
    }
}

export default Home;