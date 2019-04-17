import React from 'react';
import reactlogo from '../images/react.png'
import coast from '../images/coast.jpg'
import fire from '../images/fireplace.jpg';
import Featured from './featured';

const FeaturedContainer = () => {
    return (
        <div>
            <h2 className="heading center">Featured Blogs</h2>
            <div className="cards flexrow">
                <Featured img={reactlogo} title="How I Learned React" blogid="4" />
                <Featured img={fire} title="Winter Stories to Warm the Heart" blogid="9" />
                <Featured img={coast} title="Adventures in California" blogid="5" />
            </div>
        </div>
    )
}

export default FeaturedContainer;