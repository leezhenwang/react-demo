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

  render() {
    return (
      <div>
        <div className="customer-partner">
          合作伙伴
        </div>
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
		fiveGChannelState: state.fiveGChannelState,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ togglePartnerModal }, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Customer));