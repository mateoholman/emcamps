//The Header / Menu
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="left brand-logo">
            emcamp
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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
