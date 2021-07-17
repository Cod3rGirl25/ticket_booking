import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import LM from './components/LatestMovies';
import PageNotFound from "./components/Forgot.js";
import UM from "./components/UpcomingMovies";
import Details from "./components/Details";
import TB from "./components/TicketBooking";
import CO from "./components/Checkout";
import Event from "./components/Events";

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Nav />
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route exact path="/latestmovies" component={LM} />
          <Route exact path="/upcomings" component={UM} />
          <Route  path="/latestmovies/:id" component={Details} />
          <Route  path="/book" component={TB} />
          <Route exact path="/ticket/:ticketid" component={CO} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/*" component={PageNotFound} /> 
         
         </Switch>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
