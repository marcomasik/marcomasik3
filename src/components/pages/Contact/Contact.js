/* Contact.js

Contact page of marcomasik.com
Contains the menu and contact informations.
This page uses react icons.

*/

import React, { Component } from 'react';
import { Menu } from '../../ui/menu/Menu.js';
import { Link } from "react-router-dom";
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {Helmet} from "react-helmet";

class Contact extends Component {
	
	render() {

		return (

			<React.Fragment>

			<Helmet>
                <title>Marco Masik - Contact</title>
                <meta
			      name="description"
			      content="Contact information of Front-end Web Developer and WordPress Developer, Marco Masik. Let´s get in touch and talk about your website!"
			    />
            </Helmet>

				<div className="container--mobile-menu--pages container--mobile-menu--pages--contact">
					<Menu currentPage="CONTACT" otherPage1={<Link to="/skills">SKILLS</Link>} otherPage2={<Link to="/works">WORKS</Link>}/>
				</div>
				<div className="container--margin">
					<div className="container--contact">
						<div className="container--image--contact">
							<div className="image--contact"></div>
						</div>
						<div className="container--text-contact">
							<p>Let´s get in touch and talk about your website!</p>
							<p><div className="link--svg"><a href="mailto:hello@marcomasik.com"><FiMail /><span>Send me an email to</span></a></div></p>
							<p>hello@marcomasik.com</p>
							<p><div className="link--svg"><a href="https://github.com/marcomasik"><FaGithub /><span>Check my GitHub account</span></a></div></p>
							<p><div className="link--svg"><a href="https://www.linkedin.com/in/marco-masik"><FaLinkedin /><span>Add me on LinkedIn</span></a></div></p>
						</div>
					</div>
				</div>
			</React.Fragment>

		)

	}

}

export { Contact };