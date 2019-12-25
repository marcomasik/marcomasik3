import React, {Component} from 'react';

class SkillText extends Component {
	
	render() {

		return (

			<div className="container--skilltext">

				<div className="title--skilltext"><h2>{this.props.titleSkillText}</h2></div>
				<div className="text--skilltext"><p>{this.props.textSkillText}</p></div>

			</div>

		)

	}

}

export { SkillText };