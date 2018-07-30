import React, { Component } from 'react';
import Header from './components/layout/Header';
import AsideLeft from './components/layout/AsideLeft';
import Content from './components/layout/Content';
import AsideRight from './components/layout/AsideRight';
import Footer from './components/layout/Footer';

import "./css/all.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <AsideLeft />
          <Content />
          <AsideRight />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
