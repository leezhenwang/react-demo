import React, { Component } from 'react';
import Customer from '../../component/customer/customer.js'
import PartnerModal from '../../component/partnerModal/partnerModal.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePartnerModal } from '../../store/reducers/test/action.js';

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    console.log(this)
    console.log(this.props.match.params.id);
  }
  render() {
    const { testState } = this.props;
    const {isPartnerModalShow} = testState
    return (
      <div className="test-container">
        这里是测试页
        <Customer></Customer>
        {isPartnerModalShow ? <PartnerModal></PartnerModal> : ''}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state', state);
	return {
		testState: state.testState,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ togglePartnerModal }, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(test);