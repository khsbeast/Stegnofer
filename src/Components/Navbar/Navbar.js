import React from 'react'
import './Navbar.css'
import ball from './ball.gif'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div id="Nav">
            <div id="cont">
            <img src={ball} alt="gif"/>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <p id="head">Stegnofer</p>
            </Link>
            </div>
        </div>
    )
}

export default Navbar
