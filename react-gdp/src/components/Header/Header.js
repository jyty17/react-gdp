import React from 'react';
import './Header.css';

import searchIcon from '../../assets/images/magnifyGlass.svg';
import logo from '../../assets/images/logo.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search_text: ''
    };
  }

	render() {
		return(
			<div className="header">
        <div className="header-logo" onClick={() => window.location = "/"}>
          <img src={logo} alt="logo" className="logo" />
          <h1 className="header-title">NatGDP</h1>
        </div>
        {
        // <div className="navbar">
        //   <a href="/">about</a>
        //   <a href="/">github</a>
        //   <a href="/">contact</a>
        //   <div className="search">
        //     <input type="text" className="searchbar" placeholder="Search.." />
        //     <img src={searchIcon} alt="search" className="searchicon" />
        //   </div>
        // </div>
        }
        
			</div>
		)
	}
};

export default Header;