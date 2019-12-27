/* HamburgerIcon.js

Defines the hamburger icon, that toggles the visility of the mobile menu.
The animation can be tweaked in HamburgerIcon.scss

*/

import React, { Component } from 'react';

class HamburgerIcon extends Component {
  
 	render() {

    	return (
      		<div className={this.props.hamburgerIconClassActive}>
        	<div className="hamburger-box">
          		<div className="hamburger-inner"></div>
        	</div>
      	</div>
    	)
  	}
}

export { HamburgerIcon };  