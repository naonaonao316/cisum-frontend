import React, { Component } from 'react';
import '../../css/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClose: false
    }
  }

  handleSidebarToggleClick = (event) => {
    event.preventDefault();
    console.log("toggle gets clicked!!")
    this.setState({toggleClose: true})
  }

  render() {
    const { toggleClose } = this.state;

    const Header = (props) => (
      <header className="main-header">
        <a href="#" className={`logo ${toggleClose ? "collapsed" : ""}`}>
          <span className="logo-lg">Cisum</span>
        </a>
        <nav className={`navbar navbar-static-top ${toggleClose ? "collapsed" : ""}`}>
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" onClick={this.handleSidebarToggleClick}>
            <span className="sr-only">Toggle Navigation</span>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {/* image file will be shown here */}
                  <img src="img/Bart_Simpson_200px.png" className="user-image"/>
                  <span className="hidden-xs">John Sculley</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );

    return (
      <Header />
    );
  }
}


export default Header;
