/* Skills.js

Top parent of Work components.
Contains the menu and six thumbnails *WorkItem*, that links to particular work pages.

*/

import React, { Component } from 'react';
import { Menu } from '../../ui/menu/Menu.js';
import { Link } from "react-router-dom";
import { WorkItem } from './modules/WorkItem.js';
import {Helmet} from "react-helmet";

class Works extends Component {
	
	render() {

		return (

			<React.Fragment>

			<Helmet>
                <title>Marco Masik - Works</title>
                <meta
			      name="description"
			      content="Selected works of Front-end Web Developer and Wordpress Developer, Marco Masik."
			    />
            </Helmet>

				<div className="container--works">
					<div className="container--mobile-menu--pages container--mobile-menu--pages--works">
						<Menu currentPage="WORKS" otherPage1={<Link to="/skills">SKILLS</Link>} otherPage2={<Link to="/contact">CONTACT</Link>}/>
					</div>
					<div className="container--margin">
						<div className="container--workitem-rows">
							<Link to="/works/november"><WorkItem workItemImage="./images/november.png" titleWorkItem="November" descriptionWorkItem={["Designer brand webshop", <br />, "WordPress"]} /></Link>
							<Link to="/works/swarm"><WorkItem workItemImage="./images/swarm.png" titleWorkItem="Swarm" descriptionWorkItem={["Crypto platform homepage", <br />, "Bootstrap"]}/></Link>
							<Link to="/works/farest"><WorkItem workItemImage="./images/farest.png" titleWorkItem="Farest" descriptionWorkItem={["Adventure travel agency", <br />, "React.js"]}/></Link>
							<Link to="/works/borneo"><WorkItem workItemImage="./images/borneo.png" titleWorkItem="Borneo" descriptionWorkItem={["Folk art accesories webshop", <br />, "Squarespace"]}/></Link>
							<Link to="/works/muskinn"><WorkItem workItemImage="./images/muskinn.png" titleWorkItem="Müskinn" descriptionWorkItem={["Conceptual backpack webshop", <br />, "WooCommerce"]}/></Link>
							<Link to="/works/languagestudio"><WorkItem workItemImage="./images/languagestudio.png" titleWorkItem={["Lanugage Studio", <br />, "Köpenick"]} descriptionWorkItem={["English language school homepage", <br />, "Squarespace"]}/></Link>
						</div>
					</div>
				</div>
			</React.Fragment>

		)

	}

}

export { Works };