import React, { Component } from 'react'
import farmer from '../farmer.png'

class Navbar extends Component {

  render() {
    return (
  <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={farmer} width="30" height="30" className="d-inline-block align-top" alt="" />
      <span className="ml-3 text-xl">GiveFree App</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
       <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
             <small id="account">{this.props.account}</small>
           </small>
          </li>
         </ul>
    </nav>

  </div>
</header>
    );
  }
}

export default Navbar;
