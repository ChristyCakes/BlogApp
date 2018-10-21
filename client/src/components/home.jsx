import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Featured from './featured';

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
                <Link to="/blogs"><button>Blogs</button></Link>
                <Link to="/authors"><button>Authors</button></Link>
                <Link to="/login"><button>Write Your Own</button></Link>
                <Featured />
            </div>
        )
    }
}

export default Home;