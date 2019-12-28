/* Skills2.js

Headlines and texts for the second skills section.
React icons are used in this component.

*/

import React, { Component } from 'react';
import { ContainerSkills } from './ContainerSkills.js';
import { SkillText } from './SkillText.js';
import { FaMobileAlt, FaTabletAlt, FaDesktop, FaCode, FaTools } from 'react-icons/fa';

class Skills2 extends Component {

	render() {

		return (

			<ContainerSkills 
				skillType="container--skills--column" 
				skillContent={<React.Fragment>
					<SkillText titleSkillText={["Responsive Websites ", <FaMobileAlt />]} 
								textSkillText="Mobile First! As most people are browsing the web on mobile devices, 
								responsivity has become a must have." />
					<SkillText titleSkillText={["Languages & Frameworks ", <FaCode />]}
								textSkillText="HTML, CSS, SASS, LESS, Bootstrap, PHP, JavaScript, jQuery, React.js, SWIFT, Java, MySQL" />
					<SkillText titleSkillText={["Tools ", <FaTools />]}
								textSkillText="GIT, NPM, Photoshop, Illustrator, Sketch, WordPress, WooCommerce, Squarespace" />
				</React.Fragment>}
			/>

			)

	}

}

export { Skills2 };