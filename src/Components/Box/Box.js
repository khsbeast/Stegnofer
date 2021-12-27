import React from 'react'
import { Link } from 'react-router-dom'
import './Box.css'

const Box = (props) => {
    return (
        <div id="boxes">
            <p id="head2">{props.head}</p>
            <p id="p1">{props.desc}</p>
            <Link to={props.loc} style={{ textDecoration: 'none' }}>
            <button  class="button-75" role="button"><span class="text">{props.butt}</span></button>
            </Link>
        </div>
    )
}

export default Box
