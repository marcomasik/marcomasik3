import React, { Component } from 'react';

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
				<img className="image--workitem" src={this.props.workItemImage}/>
				<div className="container--workitem-hover">
				</div>
			</div>
			
		)

	}

}

export { WorkItem };