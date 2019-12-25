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