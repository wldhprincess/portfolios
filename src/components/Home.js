import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import './style/Home.scss'





const Home = () => {
    const [show, setShow] = useState(false);

  /*   const [show1, setShow1] = useState(false); */
    const shows = () =>{
        setShow(true)
        /* setShow1(true) */
    }
    /* const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1); */

    
    return (
        <div id='home'>
            <div className="background"></div>
            {!show ? 
            <main id="start">
                <div className='text'>
                    <h1 className="line-1 anim-typewriter">Welcome to my portfolio!</h1>
                    <hr />
                </div>
                <button className='click' onClick={shows}>Click Me!</button> 
            </main> :      
            <div className='wrap'>
                <header id="header">
                    <div className="logo"><h2>:-D</h2></div>
                    <nav className="nav">
                        <ul>
                            <li><Link to='/' >Home</Link></li>
                            <li><Link to='/About'>About Me</Link></li>
                            <li><Link to='/Project'>My project</Link></li>
                            <li><Link to='/Contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </header>
                <main id="home_main">
                    <div className="main_left" >
                        <h1 className='m_title'>Front-end</h1>
                        <h1 className='m_title'>Developer </h1>
                        </div>
                    <div className="main_right">
                        <div className="m_photo">
                            <div className="photo_box">
                           
                            <img src={process.env.PUBLIC_URL + '/img/main1.jpg'} />
                               
                            </div>
                        </div>
                        <div className="portfolio">
                            <h3>jioh's <br /> portfolio<span>2023</span></h3>
                        </div>
                    </div>
                </main>
            </div >
            }
        </div>
    );
};

export default Home;