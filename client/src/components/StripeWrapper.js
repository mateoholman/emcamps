import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emcamps"
        description="$5 for 5 Credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn-floating red">
          <i className="material-icons" style={{ verticleAlign: 'middle' }}>
            add
          </i>
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
