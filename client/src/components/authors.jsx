import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Authors = (props) => {
    let authorDisplay = [];
    (props.authors).forEach(item => {
        authorDisplay.push(
            <div key = {item.id}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            </div>
        )
    })

    return (
        <div>
            <Link to="/">Home</Link>
            <div>{authorDisplay}</div>
            {/* <Link to={{
                pathname: `/${props.id}/edit`,
                state: {
                    user: props.user,
                    text: props.text
                }
            }}>
            </Link> */}
        </div>
    )
}

export default Authors;