import React from 'react';
import { connect } from 'react-redux';
import * as components from './artistpay_components';
import { addPaymentToHistory, deletePaymentHistory, updateMinPayment, toggleArtistPayment, updatePaymentAmount } from './actions';


export const ArtistPayment = connect(
  function mapStateToProps(state) {
    return { song_history: state.songlist,
             settings: state.settings,
             payhistory: state.payhistory };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addPaymentToHistory: (payment_array) => { dispatch(addPaymentToHistory(payment_array)) },
      deletePaymentHistory: () => { dispatch(deletePaymentHistory()) },
      updateMinPayment: (min_payment) => { dispatch(updateMinPayment(min_payment)) },
      toggleArtistPayment: (mbid) => { dispatch(toggleArtistPayment(mbid)) },
      updatePaymentAmount: (amount) => { dispatch(updatePaymentAmount(amount)) }
    };
  }
)(components.ArtistPay);

