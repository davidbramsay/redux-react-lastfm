import React from 'react';
import { connect } from 'react-redux';
import * as components from './paymenthistory_components';
import { deletePaymentHistory } from './actions';


export const PaymentHistory = connect(
  function mapStateToProps(state) {
    return { payhistory: state.payhistory };
  },
  function mapDispatchToProps(dispatch) {
    return {
      deletePaymentHistory: () => { dispatch(deletePaymentHistory()) }
    };
  }
)(components.PaymentHistory);

