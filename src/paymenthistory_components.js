import React from 'react';


export function ArtistPayHistoryItem(props) {
  const { artistpayment } = props;

    return (<div>
        <div className='songlist_songname'> {artistpayment.artist}: </div>
        <div className='songlist_artist'> $ {artistpayment.payment.toFixed(2)} </div>
        for <div className='songlist_artist'> {artistpayment.num_plays} </div> song(s)
        </div>
    );
}



export class PaymentHistory extends React.Component {
  render() {
    const { payhistory, deletePaymentHistory } = this.props;

    return (
        <div>
        PAYMENT HISTORY:
        <br/>

        <ul className='songlist_list'>
            {payhistory.map(function(payment) {

                const artist_payments = payment.payments.map(artistpayment => (
                                        <li key={artistpayment.mbid}
                                            className='songlist_item'>
                                            <ArtistPayHistoryItem artistpayment={artistpayment} />
                                        </li>
                                    ));

                return (
                <span key={payment.timestamp}>
                {payment.timestamp} : $ {payment.total_payment.toFixed(2)} spent on {payment.total_plays} songs
                {artist_payments}
                </span>
                )
            })}
        </ul>

        <br/>
        <button onClick={() => {deletePaymentHistory();} }> Delete Payment History </button>

        <hr/>
        </div>
    );
  }
}
/*
                payment.payments.map(artistpayment => (
                    <li key={artistpayment.mbid}
                        className='songlist_item'>
                        <ArtistPayItem artistpayment={artistpayment} />
                    </li>
                ))
*/
