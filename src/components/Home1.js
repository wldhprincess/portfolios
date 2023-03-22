import React from 'react';
import { Link } from 'react-router-dom';

import './style/Home.scss'

const Home1 = () => {
    return (
        <div id='home'>
            <div className="background"></div>
            <div className='wrap'>
                <header id="header">
                    <div className="logo"><h2>:-D</h2></div>
                    <nav className="nav">
                        <ul>
                            <li><Link to='/Home' >Home</Link></li>
                            <li><Link to='/About'>About Me</Link></li>
                            <li><Link to='/Project'>My project</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </header>
                <main id="home_main">
                    <div className="main_left">
                        <h1 className='m_title'>Front-end</h1>
                        <h1 className='m_title'>Developer </h1>
                        </div>
                    <div className="main_right">
                        <div className="m_photo">
                            <div className="photo_box">
                                <img src="./img/main1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="portfolio">
                            <h3>jioh's <br /> portfolio<span>2023</span></h3>
                        </div>
                    </div>
                </main>
            </div >
        </div>
    );
};

export default Home1;