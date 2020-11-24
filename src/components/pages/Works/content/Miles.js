import React, { Component } from 'react';
import { ContainerWorkPage } from '../modules/ContainerWorkPage.js'

class Miles extends Component {
	
	render() {

		return (

			<ContainerWorkPage 
				videoWorkPage="/videos/MILES_iPhoneX.mp4"
				mobileVideo="yes"
				titleWorkPage="MILES"
				textWorkPage={["MILES is a carsharing provider in Germany offering a service where you pay for the kilometers driven, not the minutes of use. MILES employed me as a web developer in 2020.", 
								<ul>
									<li>Develop new reusable components on legacy Wordpress project</li>
									<li>Research on headless CMS + Javascript based frontend frameworks (Prismic, Contentful, Next.js, React.js, Gatsby.js)</li>
									<li>Implement new headless CMS on Contentful</li>
									<li>Engineer data model for reusable UI elements</li>
									<li>Develop responsive web app with Gatsby.js framework based on Contentful’s data model</li>
									<li>Increase page load speed with server side rendering and lazy loading images</li>
									<li>Develop contact form that sends data via API calls to pipedrive</li>
									<li>Develop GDPR compliant Cookie Banner</li>
									<li>Establish continuous integration pipeline on Vercel</li>
									<li>Establish staging environment and developing on feature branches</li>
								</ul>
				]}
			/>

		)

	}

}

export { Miles };