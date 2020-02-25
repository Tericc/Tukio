import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="page-footer font-small" style={{fontWeight:"bold", backgroundColor:"#FC6600", color:"white"}}>
          <h6 className="about">About</h6>
          <h6 className="explore">Explore</h6>
          <h5 className="footer-copyright text-center py-3" style={{fontFamily:"cursive", fontWeight:"bold"}}>
            built with love from exceptos developers © 2020</h5>
          <h6 className="google">Get it on google</h6>
        </footer>
      </div>
    );
  }
}

export default Footer
