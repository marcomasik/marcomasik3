import React, { Component } from 'react';
import { ContainerWorkPage } from '../modules/ContainerWorkPage.js'

class Hungaroplant extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/hungaroplant2.mp4"
				titleWorkPage="Hungaroplant"
				textWorkPage={["Creating a new website, for a tree nursery in Budapest.", 
								<ul>
									<li>Customizing squarespace template</li>
									<li>Migrating catalogues from Drupal to squarespace</li>
									<li>SEO</li>
								</ul>
				]}
			/>

		)

	}

}

export { Hungaroplant };