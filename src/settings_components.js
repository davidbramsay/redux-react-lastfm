import React from 'react';


export class Settings extends React.Component {
  render() {
    const { settings, updateLastFMUsername, updatePaymentAmount, togglePaymentEnabled } = this.props;

    return (
        <div>
        LastFM Username:
        <input type="text"
        ref = "myTextInput"
        defaultValue = {settings.lastfm.username} />
        <button onClick={() => { updateLastFMUsername(this.refs.myTextInput.value); }}> Update Username </button>
        <hr/>
        </div>
    );
  }
}

