import React, { Component } from 'react';

const Content = (props) => (
  <div className="content-wrapper">
    This is going to be content
    <section className="content-header">
      <h1>
        Dashboard
        <small>Version 2.0</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        <li className="active">Dashboard</li>
      </ol>
    </section>

    <section className="content">
      // Content will be written here
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">

        </div>
      </div>
    </section>
  </div>
);

export default Content;
