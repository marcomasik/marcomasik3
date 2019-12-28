import React, { Component } from 'react';
import { ContainerWorkPage } from '../modules/ContainerWorkPage.js'

class Borneo extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/borneo2.mp4"
				titleWorkPage="Borneo"
				textWorkPage={["Website and webshop, including SEO for an eco-luxury fashion brand focusing on accessories inspired by Indonesian folk art and handcraft culture.", 
								<ul>
									<li>Creating squarespace template for unique looking lookbooks</li>
									<li>Migrating webshop from wordpress to squarespace</li>
								</ul>
				]}
			/>

		)

	}

}

export { Borneo };