import React, { Component } from 'react';
import '../../css/header.css';


const Logo = ({toggleClose}) => (
  <a href="#" className={`logo ${toggleClose ? "collapsed" : "normal"}`}>
    <span className="logo-lg">Cisum</span>
  </a>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClose: false
    }
  }

  handleSidebarToggleClick = (event) => {
    event.preventDefault();
    const { toggleClose } = this.state;
    const newToggleClose = !toggleClose;
    this.setState({toggleClose: newToggleClose})
  }

  render() {
    const { toggleClose } = this.state;


    const Header = (props) => (
      <header className="main-header">
        <nav className={`navbar navbar-static-top ${toggleClose ? "collapsed" : ""}`}>
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" onClick={this.handleSidebarToggleClick}>
            <span className="sr-only">Toggle Navigation</span>
          </a>
          <Logo toggleClose={toggleClose} />
        </nav>
      </header>
    );

    return (
      <Header />
    );
  }
}


export default Header;
