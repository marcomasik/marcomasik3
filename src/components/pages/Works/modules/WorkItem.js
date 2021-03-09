/* WorkItem.js

This component represents a thumbnail on the page, where all the works all listed.

titleWorkItem = Title of the work page
descriptionWorkItem = Description of the work, type of business and technology used
workItemImage = Path to the a screenshot about the work
Values are set in Works.js to these props.

 */

import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

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
				<LazyLoad  width={350} height={216} placeholder="./images/loading-opaque.gif" >
					<img className="image--workitem" src={this.props.workItemImage}/>
				</LazyLoad>
				<div className={`container--workitem-hover ${this.props.darkerHover === true ? "container--workitem-hover--darker" : null}`}>
				</div>
			</div>
			
		)

	}

}

export { WorkItem };