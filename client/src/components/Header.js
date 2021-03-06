//The Header / Menu
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import StripeWrapper from './StripeWrapper';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Log In</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <StripeWrapper />
          </li>,
          <li key="3" style={{ margin: '0px 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="indigo lighten-1">
        <div className="nav-wrapper">
          <div
            className="brand-area"
            style={{
              margin: '.5em',
              padding: '0em',
              fontFamily: 'Pacifico, cursive'
            }}
          >
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              Campr
            </Link>
          </div>

          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
