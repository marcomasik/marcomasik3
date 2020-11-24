import React, { Component } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from "react-router-dom";

class BackButton extends Component {
	
	render() {

		return (

			<div className="container--backbutton">
				<div className="link--svg">
					<Link to={this.props.backButtonLinkTo}>
						&#8592;
					</Link>
				</div>
			</div>

		)

	}

}

export { BackButton };