import React from 'react';
import { connect } from 'react-redux';
import * as components from './settings_components';
import { updateLastFMUsername, updatePaymentAmount, togglePaymentEnabled } from './actions';


export const Settings = connect(
  function mapStateToProps(state) {
    return { settings: state.settings };
  },
  function mapDispatchToProps(dispatch) {
    return {
      updateLastFMUsername: (name) => { dispatch(updateLastFMUsername(name)) },
      updatePaymentAmount: (amount) => { dispatch(updatePaymentAmount(amount)) },
      togglePaymentEnabled: () => { dispatch(togglePaymentEnabled()) }
    };
  }
)(components.Settings);

