import React, { Component } from 'react';

import { Link } from "react-router-dom";
import { MobileMenu } from '../../ui/menu/MobileMenu/MobileMenu.js';
import posed, { PoseGroup } from 'react-pose';

import {Helmet} from "react-helmet";

const StartScale = posed.div({
  enter: {
    scale: 1
  },
  exit: {
    scale: .1
  }
});

class Start extends Component {	

	render() {

		var ReactFitText = require('react-fittext');

		return (

			<React.Fragment>

			<Helmet>
                <title>Marco Masik - Web developer</title>
                <meta
			      name="description"
			      content="Create responsive websites and fast applications with Front-End Web Developer and WordPress Developer, Marco Masik."
			    />
            </Helmet>

			<StartScale className="container--start">
				<div className="container--video">
					<video autoPlay playsInline muted loop id="ocean-video">
						<source src="/ocean_waves.mp4" type="video/mp4" />
					</video>
					<MobileMenu />
					<div className="container--text">
						<ReactFitText compressor={0.75}>
							<h1 className="title--start--large">MARCO MASIK</h1>
						</ReactFitText>
						<ReactFitText compressor={1.9}>
							<h2 className="tagline--start--large">WEB DEVELOPER</h2>
						</ReactFitText>
						<ReactFitText compressor={3}>
							<ul className="menu--start">							
								<li><Link to="/skills">SKILLS</Link></li>
								<li><Link to="/works">WORKS</Link></li>
								<li><Link to="/contact">CONTACT</Link></li>				
							</ul>
						</ReactFitText>
					</div>
				</div>		
			</StartScale>		

			</React.Fragment>

			)

	}
	
}

export { Start };