import React, { Component } from 'react';
import { ContainerWorkPage } from './ContainerWorkPage.js'

class Muskinn extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/muskinn2.mp4"
				titleWorkPage="Müskinn"
				textWorkPage={["Developing the website and webshop for a design studio focusing on conceptual backpacks and accessories.", 
								<ul>
									<li>Developing on a customized WooCommerce theme</li>
									<li>Enhance interactions</li>
									<li>Fix responsive appearance</li>
								</ul>
				]}
			/>

		)

	}

}

export { Muskinn };