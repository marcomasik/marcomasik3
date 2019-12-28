import React, { Component } from 'react';
import { ContainerWorkPage } from '../modules/ContainerWorkPage.js'

class Swarm extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/swarm2.mp4"
				titleWorkPage="Swarm" 
				textWorkPage={["Created by one of the founders of the decentralized internet movement, Swarm is a blockchain-based distributed storage platform specializing on storing various web3 services.", 
								<ul>
									<li>Developing responsive UI</li>
									<li>Clearing up the source code, contributed by several developers</li>
								</ul>
				]}
			/>

		)

	}

}

export { Swarm };