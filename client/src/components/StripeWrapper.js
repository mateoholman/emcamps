import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emcamps"
        description="$5 for 5 Credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default StripeWrapper;
