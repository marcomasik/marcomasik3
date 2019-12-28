import React, { Component } from 'react';
import { ContainerWorkPage } from '../modules/ContainerWorkPage.js'

class November extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/november5.mp4"
				titleWorkPage="November" 
				textWorkPage={["A clean, minimalistic website with a lookbook and a webshop for November, a young art and fashion collective focusing on fresh designer clothing and accessories.", 
								<ul>
									<li>Website and webshop development</li>
									<li>A unique WordPress theme based on the brand design</li>
								</ul>
				]}
			/>

		)

	}

}

export { November };