import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Workout Tracker"
        description="Add $5 to your account"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button id="money-button" className="btn">
          Add Balance
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
