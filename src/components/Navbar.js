import {Link} from "react-router-dom";

export default function(){
    return(
      <div>
        <nav class="navbar navbar-light" style={{"background-color": "#001f1f"}}>
          <div class="container-fluid">
            <Link  aria-current="page" to ="/">
              <h1 class="navbar-brand" style={{"color": "#f0f8ff"}}><span style={{"color": "blue","font-family": "Brush Script MT", "font-size" : "25px"}}>E</span ><span style={{"color": "#f5fffa"}}>-cube</span></h1>
            </Link>
          <form class="d-flex">
          <input class="form-control mr-sm-3" type="search" placeholder="Search" aria-label="Search"></input> 
          <button class="btn btn-outline-success" type="submit">Search</button>
        
          </form>
    
          <button class="navbar-toggler" style={{"background-color": "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" style={{"color": "white"}}aria-current="page" to ="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={{"color": "white"}} to ="/latestmovies">Latest Movies</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={{"color": "white"}} to ="/upcomings">Upcoming Movies</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" style={{"color": "white"}} to ="/event">Nearby Events</Link>
            </li>
          </ul>
        <form class="d-flex">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> 
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      
        </div>
      </div>
    </nav>
  </div>
    )
}