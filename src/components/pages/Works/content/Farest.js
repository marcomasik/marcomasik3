import React, { Component } from 'react';
import { ContainerWorkPage } from '../modules/ContainerWorkPage.js'

class Farest extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/farest3.mov"
				titleWorkPage="Farest"
				textWorkPage={["Farest is an adventure travel agency start up, focusing on young millenials, offering niche locations and sports.", 
								<ul>
									<li>Creating landing page animations</li>
									<li>React.js development</li>
								</ul>
				]}
			/>

		)

	}

}

export { Farest };