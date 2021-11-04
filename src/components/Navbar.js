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
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
      // <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      //   <a
      //     className="navbar-brand col-sm-3 col-md-2 mr-0"
      //     href="http://www.dappuniversity.com/bootcamp"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     <img src={farmer} width="30" height="30" className="d-inline-block align-top" alt="" />
      //     &nbsp; DApp Token Farm
      //   </a>

      //   <ul className="navbar-nav px-3">
      //     <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
      //       <small className="text-secondary">
      //         <small id="account">{this.props.account}</small>
      //       </small>
      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default Navbar;
