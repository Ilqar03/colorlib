import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='nav_icon'><Link to={"/"}><p>OneSchool</p></Link></div>
                <div className='nav_element'>
                    <p>Home </p>
                    <p>Courses </p>
                    <p>Programs </p>
                    <p>Teachers </p>
                </div>
                <div className='nav_addpage'><NavLink to={"/addpage"}><button>AddPage</button></NavLink></div>
            </div>
        </nav>
    )
}

export default Navbar