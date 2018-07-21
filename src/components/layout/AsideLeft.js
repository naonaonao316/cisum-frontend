import React, { Component } from 'react';
import '../../css/leftpane.css';

const AsideLeft = (props) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img src="img/Bart_Simpson_200px.png" className="img-circle"/>
        </div>
        <div className="pull-left info">
          <p>John Sculley</p>
          <a href="#">
            <i className="fa fa-circle text-success"></i>Online
          </a>
        </div>
      </div>
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">Main Navigation</li>
        <li className="active treeview menu-open">
          <a href="#">
            <i className="fa fa-dashboard"></i>
            <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i> 
            </span>
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-files-o"></i>
            <span>Layout Options</span>
            <span className="pull-right-container">
              <span className="label label-primary pull-right">4</span>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="#"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
            <li><a href="#"><i className="fa fa-circle-o"></i> Boxed</a></li>
            <li><a href="#"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
);

export default AsideLeft;
