import React, { Component } from 'react';

const AsideLeft = (props) => (
  <aside className="main-sidebar">
    This is going to be left pane
    <section className="sidebar">
      <div className="user-panel">
      </div>
      <form action="#" method="get" className="sidebar-form">

      </form>
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">Main Navigation</li>
        <li className="active treeview">
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
