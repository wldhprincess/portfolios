import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div id='wrap_box'>
            <div id='wrap'>
                <header id="header">
                    <Link to='/' className="logo"><h2>:-D</h2></Link>
                    <nav className="nav">
                        <ul>
                            <li><Link to='/Home'>Home</Link></li>
                            <li><Link to='/About'>About Me</Link></li>
                            <li><Link to='/Project'>My project</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                        </ul>
                    </nav>
                    <nav className="m_menu">
                        <ul>
                            <li><Link className='a_tag' to='/Home' title='Home'></Link></li>
                            <li><Link className='a_tag' to='/About' title='About Me'></Link></li>
                            <li><Link className='a_tag' to='/Project' title='My project'></Link></li>
                            <li><Link className='a_tag' to='/Contact' title='Contact'></Link></li>
                        </ul>
                    </nav>
                </header>
                <div className="bar">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                </div>
                <div className="cloud1"></div>
                <div className="cloud2"></div>
                <div className="cloud2_1"></div>
                <div className="cloud3"></div>
                <div className="cloud3_1"></div>
                <div className="cloud3_2"></div>
                <div className="cloud4"></div>
                <div className="cloud4_1"></div>
            </div >
        </div>
    );
};

export default Header;