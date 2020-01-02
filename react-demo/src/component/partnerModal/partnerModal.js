import React, { Component } from 'react';
import './partnerModal.css'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePartnerModal } from '../../page/test/redux/action';

class partnerModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      
    }
  }
  toggleTestModal= ()=>{
    console.log(this.props)
    this.props.actions.togglePartnerModal(false)
  }
  render() {
    return (
      <div className="partner-container">
        合作伙伴弹窗
        <p onClick={()=>this.toggleTestModal()}>点击关闭</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(partnerModal));