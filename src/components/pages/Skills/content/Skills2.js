/* Skills2.js

Headlines and texts for the second skills section.
React icons are used in this component.

*/

import React, { Component } from 'react';
import { ContainerSkills } from './../modules/ContainerSkills.js';
import { SkillText } from './../modules/SkillText.js';
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
								textSkillText="HTML, CSS, SASS, LESS, Bootstrap, PHP, JavaScript, jQuery, Node.js, React.js, Next.js, Gatsby.js, GraphQL, SWIFT, Java, MySQL" />
					<SkillText titleSkillText={["Tools, CMSs & Hosts", <FaTools />]}
								textSkillText="GIT, NPM, Photoshop, Illustrator, Sketch, Figma, Squarespace, JIRA, Asana, WordPress, WooCommerce, Contentful, Prismic, Netlify, Heroku, Vercel" />
				</React.Fragment>}
			/>

			)

	}

}

export { Skills2 };