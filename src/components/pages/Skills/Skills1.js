import React, { Component } from 'react';
import { ContainerSkills } from './ContainerSkills.js';
import { SkillText } from './SkillText.js';
import { IoIosArrowDown } from 'react-icons/io';

class Skills1 extends Component {

	render() {

		return (
			<ContainerSkills 
				skillType="container--skills--row" 
				skillContent={<React.Fragment>
					<SkillText titleSkillText="Web application design and front-end development" 
								textSkillText="Engineering framework based web applications, that work efficiently on complex business tasks.
								" />
					<SkillText titleSkillText="Customized wordpress and squarespace templates" 
								textSkillText="Developing wordpress themes and squarespace templates from scratch or modify existing ones to 
								meet your needs." />
					<SkillText titleSkillText="E-commerce development, setup and deployment" 
								textSkillText="I have experience in setting up e-commerce systems and in creating unique looking 
								webshops using different platforms." />
				</React.Fragment>}
			/>
			)

	}

}

export { Skills1 };