import React, { Component } from 'react';
import '../../css/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleclose: false
    }
  }

  render() {
    const { toggleclose } = this.state;

    const Header = (props) => (
      <header className="main-header">
        <a href="#" className="logo"><h1>Cisum</h1></a>
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu">
            <span>Toggle Navigation</span>
          </a>
          <ul>
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                {/* image file will be shown here */}
                <span className="hidden-xs">John Sculley</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );

    return (
      <Header />
    );
  }
}


export default Header;
