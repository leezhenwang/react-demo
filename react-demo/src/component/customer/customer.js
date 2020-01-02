import React, { Component } from 'react';
import './customer.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePartnerModal } from '../../page/test/redux/action';

class Customer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }
  toggleTestModal= ()=>{
    console.log(this.props)
    this.props.actions.togglePartnerModal(true)
  }
  render() {
    const {match} = this.props;
    const {path} = match;
    console.log(path)
    return (
      <div>
        {path === '/test/:id' ? <div className="customer-partner" onClick={()=> this.toggleTestModal()}>
          合作伙伴
        </div> : ''}
        <div className="customer-backToTop">
          返回顶部
        </div>
        <div className="customer-container">
          客服
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
	// console.log('state', state);
	return {
		testState: state.testState,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ togglePartnerModal }, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customer));