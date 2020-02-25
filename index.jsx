import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './comp/Navbar'
import Card from './comp/Card'
import Footer from './comp/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './css/index.css'

class Tukio extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Card/>
        <Footer/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Tukio />,
  document.getElementById('root')
);
