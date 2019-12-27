/* MobileMenu.js

Defines the mobile version of the menu.
Hamburgericon toggles the visibility of the mobile menu (the icon layout and animation is defined separately in HamburgerIcon.js and HamburgergIcon.scss)

*/

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HamburgerIcon } from './HamburgerIcon.js';

const SlidingMenuLayer = ({ visible }) => ( 
    <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
        <ul className="menu--start">              
            <li><Link to="/skills">SKILLS</Link></li>
            <li><Link to="/works">WORKS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>       
        </ul>
    </div>
)

class MobileMenu extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = { visible: false }
    }

    handleClick() {
        this.setState(prev => ({ visible: !prev.visible }))
    }
  
    render() {

        var ReactFitText = require('react-fittext');

        return (
            <div className="menu--mobile">
                <button type="button" onClick={this.handleClick}>
                    {this.state.visible ? <HamburgerIcon hamburgerIconClassActive="hamburger hamburger--squeeze is-active"/> : <HamburgerIcon hamburgerIconClassActive="hamburger hamburger--squeeze" />}
                </button>
                <ReactFitText compressor={0.71}>
                    <h1 className="title--start--mobile"><Link to="/">MARCO MASIK</Link></h1>
                </ReactFitText>
                <h2 className="tagline--start--mobile">WEB DEVELOPER</h2>
                <SlidingMenuLayer visible={this.state.visible} />
            </div>
        )
    }
}

export { MobileMenu };