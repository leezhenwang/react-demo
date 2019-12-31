import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import index from './page/index/index.js';
import MyHeader from './component/myheader/myheader.js';
import test from './page/test/test.js'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="index-container">
        <MyHeader></MyHeader>
        <Route exact path="/" component={index}></Route>
        <Route exact path="/test/:id" component={test}></Route>
      </div>
    )
  }
}

export default App
