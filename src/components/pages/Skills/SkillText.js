/* SkillText.js

Component for the headlines and texts in skills.

titleSkillText = Headline of a text block
textSkillText = Bodytext of a text block
Values set in the individual skill section components(Skills1 and Skills2) for these props.

*/

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