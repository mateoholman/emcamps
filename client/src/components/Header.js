//The Header / Menu
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            emcamp
          </a>
          <ul className="right">
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
