import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-custom">
          <h4 style={{fontWeight:"bold", color:"#FC6600"}} className="navbar-brand">Tukio</h4>
          <h6 className="navbar-btn help">Help</h6>
          <h6 className="navbar-btn ml-3 sign">Sign In</h6>
        </nav>
      </div>
    );
  }
}

export default Navbar
