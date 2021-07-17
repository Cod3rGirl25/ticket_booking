import React from "react"
import { Link } from "react-router-dom";
import './style.css';

function PageNotFound() {
  return (
    <React.Fragment>
      <div className="row" style={{"background-color": "#000000", "height":"200%"}}>
        <div className="container"  >
          <div className="container mt-5 mb-5 div-404">
            <img className="img-404" src="/4.jpg" alt="Page not found" />
          <div className="content">
            <Link to="/" className="card"><span>
            <button  className="btn btn" style={{"background-color": "#e2062c","font-family": "arial", color: "white"}}  type="submit">
              Click here to go to Home page</button></span></Link>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default PageNotFound
