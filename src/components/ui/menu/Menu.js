/* Menu.js

The menu is the main navigation interface, used on almost every page, except Start.js
Desktop and tablet version of the menu is defined in this class.
Mobile version is defined in a separate class and is nested in this class.
Headroom changes the menu to fixed after scrolling upwards.

currentPage = the largest primary menu element
otherPage1 &  otherPage2 = the smaller secondary menu element
Values are set in each individual page components(Skills, Works, Contact) for these props.

*/

import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { MobileMenu } from './MobileMenu/MobileMenu.js';
import Headroom from "react-headroom";

class Menu extends Component {

	render() {

		return (
			<React.Fragment>
				<MobileMenu />
				<Headroom>
					<div className="container--menu">
						<div className="container--menu--half">
							<h2><Link to="/">MARCO MASIK</Link></h2>
						</div>
						<div className="container--menu--half">
							<ul class="menu nav">
								<li className="menu__element--current">
									<h2>{this.props.currentPage}</h2>
								</li>
								<li className="menu__element">
									<h2>{this.props.otherPage1}</h2>
								</li>
								<li className="menu__element">
									<h2>{this.props.otherPage2}</h2>
								</li>
							</ul>
						</div>
					</div>
				</Headroom>
			</React.Fragment>

			)

	}

}

export { Menu };