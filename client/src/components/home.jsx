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
            <div style={{ backgroundColor: "rgb(207, 231, 238)" }}>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-white" >Rainy Day Blog</h1>
                        <p className="lead text-white">Curl up with a blanket and some coffee and read for hours</p>
                    </div>
                </div>
                <Nav />
                <Featured />
            </div>
        )
    }
}

export {Home};