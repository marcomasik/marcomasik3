/* Skills.js

Top parent of Skills components.
Contains the menu and two sections of skill content.

*/

import React, { Component } from 'react';
import { Menu } from '../../ui/menu/Menu.js';
import { Skills1 } from './content/Skills1.js';
import { Skills2 } from './content/Skills2.js';
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";


class Skills extends Component {

	render() {

		return (
			
			<React.Fragment>

			<Helmet>
                <title>Marco Masik - Skills</title>
                <meta
			      name="description"
			      content="Skills and Services: Web application development, WordPress theme and squarespace template development, E-Commerce development and setup."
			    />
            </Helmet>
			
				<div className="container--mobile-menu--pages container--mobile-menu--pages--skills">
					<Menu currentPage="SKILLS" otherPage1={<Link to="/works">WORKS</Link>} otherPage2={<Link to="/contact">CONTACT</Link>}/>
				</div>
				<Skills1 />
				<Skills2 />
			</React.Fragment>

			)

	}

}

export { Skills };