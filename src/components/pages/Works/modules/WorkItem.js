/* WorkItem.js

This component represents a thumbnail on the page, where all the works all listed.

titleWorkItem = Title of the work page
descriptionWorkItem = Description of the work, type of business and technology used
workItemImage = Path to the a screenshot about the work
Values are set in Works.js to these props.

 */

import React, { Component } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class WorkItem extends Component {
	
	render() {

		return (

			<div className="container--workitem">
				<div className="container--workitem-text">
					<div className="title--workitem">
						{this.props.titleWorkItem}
					</div>
					<div className="description-workitem">
						{this.props.descriptionWorkItem}
					</div>
				</div>
				 <LazyLoadImage
				    //wrapperClassName="image--workitem"
				    effect="blur"
				    src={this.props.workItemImage} />
				<div className={`container--workitem-hover ${this.props.darkerHover === true ? "container--workitem-hover--darker" : null}`}>
				</div>
			</div>
			
		)

	}

}

export { WorkItem };