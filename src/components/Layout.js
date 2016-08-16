import React from 'react';
import Navbar from './navbar/Navbar.js';
import Footer from './footer/Footer.js';
export default class Layout extends React.Component {

  render() {

    return (
      <div>
        <Navbar />
        <div className='container' >
          {this.props.children}
        </div>
        <Footer />
      </div>
    )

  }

}
