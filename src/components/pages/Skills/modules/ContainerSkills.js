/* ContainerSkills.js

Container element for skill sections.

skillType = defines the skill section layout -> rows or columns
skillContent = this contains the headlines and texts
Values set in the individual skill section components(Skills1 and Skills2) for these props.

*/

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