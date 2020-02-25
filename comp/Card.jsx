import React from 'react'

class Card extends React.Component {
  render() {
    return (
      <div className="row container ml-1 mt-3">
        <div className="col-7">
          <img src="../img/tukio.png" className="img-fluid img-thumbnail" max-width="100%" height="auto" alt="Tukio"/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h6 style={{color:"grey"}}>Description: </h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button className="btn btn-md" style={{backgroundColor:"#FC6600",
           color:"white", fontWeight:"bold"}}>
            100 Tickets available</button>
          <br/><br/>
        </div>
        <div className="col-4 offset-md-1">
          <h6 style={{color:"grey"}}>Date And Time: </h6>
          <p>Mon, Feb 24, 2020, 8:30AM - <br/>Fri, Feb 28, 2020, 10:00PM WAT</p>
          <h6 style={{color:"#FC6600"}}>Add to Calendar </h6>
          <h6 style={{color:"grey"}}>Date And Time: </h6>
          <p>Landmark Center, <br/> Plot 2 & 3 Water Coperation Road <br/> Lagos, LA</p>
          <h6 style={{color:"#FC6600"}}>View Map </h6>
          <br/>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Comments</th>
                <th scope="col">Likes</th>
                <th scope="col">Updates</th>
                <th scope="col">Going</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6</td>
                <td>40</td>
                <td>13</td>
                <td>25</td>
              </tr>
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default Card
