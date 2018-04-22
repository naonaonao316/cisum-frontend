import React, { Component } from 'react';
import Header from './components/layout/Header';
import AsideLeft from './components/layout/AsideLeft';
import Content from './components/layout/Content';
import AsideRight from './components/layout/AsideRight';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AsideLeft />
        <Content />
        <AsideRight />
        <Footer />
      </div>
    );
  }
}

export default App;
