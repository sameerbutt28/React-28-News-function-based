import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

// import PropTypes from 'prop-types'

const Navbar = () => {
    return (
        <div >
            <nav className='navbar'>
                <p className='newsname' > 28-News</p>
                <ul className='nav_list'>
                    <li > <Link to="/news"> top-headlines </Link> </li>
                    <li > <Link to="/about"> about </Link> </li>
                    <li > <Link to="/business"> business </Link> </li>
                    <li > <Link to="/entertainment"> entertainment</Link> </li>
                    <li > <Link to="/general"> general</Link> </li>
                    <li > <Link to="/health"> health</Link> </li>
                    <li > <Link to="/science"> science</Link> </li>
                    <li > <Link to="/sports"> sports</Link> </li>
                    <li > <Link to="/technology"> technology</Link> </li>

                </ul>
            </nav>
        </div>
    )

}

export default Navbar
