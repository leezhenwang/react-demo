import React, { Component } from 'react';
import Customer from '../../component/customer/customer.js'

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '这里是首页'
    }
  }
  goTest = (text)=>{
    console.log(text)
    this.props.history.push('./test/1')
  }

  render() {
    return (
      <div className="index-container">
        <div className="index-text" style={{height: '100px',background:'yellow'}}>{this.state.text}</div>
        <button onClick={()=>this.goTest('点击了')}>点击跳转测试页</button>
        <Customer></Customer>
      </div>
    )
  }
}

export default Index