import React from "react";
import App from './App.jsx';
import App2 from './App2.jsx';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const Nav = () =>{
    return (
        <nav className="Nav">
            <Link to = "/" className="Link">Two Part</Link>
            <Link to = "/single" className="Link">Single Part</Link>
        </nav>
    )
}

const Full = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/single" element={<App2/>}/>
            </Routes>
            <Nav/>
        </BrowserRouter>
    )
}

export default Full;