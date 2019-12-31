import React, {Component} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import App from './../container/index';

class RouterMap extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={App}></Route>
      </Router>
    )
  }
}
export default RouterMap