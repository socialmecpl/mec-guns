import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Guns</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Systems</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Robots</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Complete Systems</h1>
                    <span className="subtitle">Order Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;