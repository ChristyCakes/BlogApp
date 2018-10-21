import React from 'react';
import { BrowserRouter as Router, NavLink, Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/blogs"><button>Blogs</button></Link>
            <Link to="/authors"><button>Authors</button></Link>
            <Link to="/login"><button>Write Your Own</button></Link>
        </div>
    )
}

export default Nav;