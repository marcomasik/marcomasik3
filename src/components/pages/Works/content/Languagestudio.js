import React, { Component } from 'react';
import { ContainerWorkPage } from '../modules/ContainerWorkPage.js'

class Languagestudio extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/languagestudio.mp4"
				titleWorkPage="Language Studio Köpenick"
				textWorkPage={["Creating a new website for an english  language school in Berlin.", 
								<ul>
									<li>Developing a unique squarespace template</li>
								</ul>
				]}
			/>

		)

	}

}

export { Languagestudio };