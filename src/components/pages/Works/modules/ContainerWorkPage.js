/* ContainerWorkPage.js

Structure of a single work page.
Contains the menu and the work page content.
Transition animation is realized by react pose.
"title--workpage small-view"(mobile) displays the same content as "title--workpage large-view"(desktop/ipad)

titleWorkPage = Title of the workpage
videoWorkPage = Path to video about the work
textWorkPage= Description text of the work
Values are set in Works.js for these props.

*/


import React, { Component } from 'react';
import { Menu } from '../../../ui/menu/Menu.js';
import { Link } from "react-router-dom";
import { BackButton } from '../../../ui/BackButton/BackButton.js';

import posed, { PoseGroup } from 'react-pose';

const ContainerWorkPageInner = posed.div({
  enter: {
  	scale: 1
  },
  exit: {
    scale: .3,
    transition: {
    	scale: {
    	ease: 'easeInOut',
    	default: { duration: 100 }
    	}
    }   
  }
});

class ContainerWorkPage extends Component {
	
	render() {

		return (

			<React.Fragment>
				<div className="container--workpage--outter">
					<div className="container--mobile-menu--pages container--mobile-menu--pages--works">
						<Menu currentPage="WORKS" otherPage1={<Link to="/skills">SKILLS</Link>} otherPage2={<Link to="/contact">CONTACT</Link>}/>
					</div>
					<div className="container--margin">
						<ContainerWorkPageInner className="container--workpage--inner">
							<BackButton backButtonLinkTo="/works"/>
							<div className="container--workpage--content">
								<div className={`container--workpage--video container--workpage--video${this.props.mobileVideo === "yes" ? "--mobile-video" : null}`}>
									<div className="title--workpage small-view">{this.props.titleWorkPage}</div>
									<video  autoPlay playsInline muted loop>
										<source src={this.props.videoWorkPage} type="video/mp4" />
									</video>
								</div>
								<div className="container--workpage--text">
									<div className="title--workpage large-view">{this.props.titleWorkPage}</div>
									<div className="text--workpage">{this.props.textWorkPage}</div>
								</div>
							</div>
							
						</ContainerWorkPageInner>
					</div>
				</div>
			</React.Fragment>

		)

	}

}

export { ContainerWorkPage };