import React, { Component } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from "react-router-dom";

class BackButton extends Component {
	
	render() {

		return (

			<div className="container--backbutton">
				<div className="link--svg">
					<Link to={this.props.backButtonLinkTo}>
						<IoMdArrowRoundBack />
						<span>
							Back
						</span>
					</Link>
				</div>
			</div>

		)

	}

}

export { BackButton };