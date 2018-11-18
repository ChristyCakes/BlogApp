import React, { Component } from 'react';
import reactlogo from '../images/react.png'
import coast from '../images/coast.jpg'
import fire from '../images/fireplace.jpg';
import Featured from './featured';

const FeaturedContainer = (props) => {
    return (
        <div>
            <h2 className="heading center">Featured Blogs</h2>
            <div className="cards flexrow flexend">
                <Featured img={reactlogo} title="How I Learned React" />
                <Featured img={fire} title="Winter Stories to Warm the Heart" />
                <Featured img={coast} title="Adventures in California" />
            </div>
        </div>
    )
}

export default FeaturedContainer;