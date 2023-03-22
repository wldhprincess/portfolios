import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Home1 from './components/Home1';

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home1 />} />
                <Route path="/About" element={<About />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </HashRouter>
    );
};

export default Router;