/* Skills1.js

Headlines and texts for the first skills section.

*/

import React, { Component } from 'react';
import { ContainerSkills } from './../modules/ContainerSkills.js';
import { SkillText } from './../modules/SkillText.js';
import { IoIosArrowDown } from 'react-icons/io';

class Skills1 extends Component {

	render() {

		return (
			<ContainerSkills 
				skillType="container--skills--row" 
				skillContent={<React.Fragment>
					<SkillText titleSkillText="Web app development" 
								textSkillText="Creating Javascript framework based web applications, that work efficiently on complex business tasks
								and have an opulent look." />
					<SkillText titleSkillText="CMS knowledge" 
								textSkillText="Implement blazing fast headless CMSs with state of the art frontend frameworks or develop new wordpress themes." />
					<SkillText titleSkillText="E-commerce background" 
								textSkillText="I have experience in setting up e-commerce systems and in creating unique looking 
								webshops using different platforms." />
				</React.Fragment>}
			/>
			)

	}

}

export { Skills1 };