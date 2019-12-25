import React, { Component } from 'react';

class ContainerSkills extends Component {

	render() {

		return (
			
				<div className="container--skills">
					<div className="container--margin">
						<div className={this.props.skillType}>
							{this.props.skillContent}						
						</div>
					</div>
				</div>
			
			)

	}

}

export { ContainerSkills };