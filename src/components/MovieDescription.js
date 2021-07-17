import { Link } from "react-router-dom";
import './style.css';
import Book from './TicketBooking';
let image='77.jpg';

export default function MovieDescription(props){
    //const onClickAddToCart = (event) => {
       // <Book data={props.data} />
       
      //}
    
 
    return(
            <div>
                <section style={{"background-color": "#9bddff"}} className="pic">
                    <div className="container">
                        <div className="left">
                            
                            <img  className="card-img-top" src={props.data.img} alt={props.data.name}/>
                            
                        </div>
                        <div className="right">
                            <div className="content">
                                <h2>{props.data.name}</h2>
                               <p>
                                <h6><span style={{"color":"#43b3ae"}}>Release Date:</span></h6> {props.data.date}
                                <h6 ><span style={{"color":"#43b3ae"}}>Duration:</span></h6> {props.data.type}
                                 <h6><span style={{"color":"#43b3ae"}}>Price:</span> {props.data.price}</h6>
                                <h6><span style={{"color":"#43b3ae"}}>Rating: </span>
                                <span style={{"color":"#32cd32"}}>{props.data.like}</span> Liked</h6>
                                </p>
                                  <Link to={{
                                      pathname: '/book',
                                      state:{
                                            data:{props}
                                      }
                                  }}> 
                                        <button  className="btn btn" style={{"background-color": "#e2062c","font-family": "arial", color:"white"}}  type="submit">
                                            Book Now
                                        </button>
                                    </Link>
                                    
                            </div>
                         </div>
                    </div>
                </section>
            </div>
               
               
    )
     
    }