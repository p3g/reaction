import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className='light-blue lighten-1' role='navigation' >
      <div className="nav-wrapper container">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="principles">Our Principles</Link></li>
        <li><Link to="public">Public</Link></li>
        <li><Link to="history">History</Link></li>
        <li><Link to="about">About</Link></li>
      </ul>
    </div>
   </nav>);
  }

}
