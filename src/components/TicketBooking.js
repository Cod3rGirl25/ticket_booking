
import React , {Component} from "react";
import {Link} from "react-router-dom";
import Axios from 'axios';
import ticket from './Checkout';
import "./signup.css";


class TicketBooking  extends Component{
    constructor(props){
        super(props)
        this.state={
            userName: '',
            title: '',
            author:'',
            time: '',
            ticketId:'',
            movieName:'',
            id:'',
            img:''



        }
    }
    changeHandler = (e) => {
        this.state.ticketId=Math.floor(Math.random() * 10000);
        //id=this.state.ticketid;
        this.setState({[e.target.name]:e.target.value})
        console.log("check",this.props.location.state.data.props.data.name)
        console.log("ticket",this.state.ticketId )
    }
    submitHandler =(e) => {
        
        this.state.id=this.state.ticketId;
        this.state.img=this.props.location.state.data.props.data.img;
        this.state.movieName=this.props.location.state.data.props.data.name;
       e.preventDefault()
       console.log(this.state)
       Axios.post('http://localhost:5000/posts',this.state)
       .then(response =>{
           console.log(response)

           alert("Ticket booked Successfully!!! Refresh to book another");
       })
       .catch(error =>{
           console.log(error)
       })
    }
    render(){
         let name=this.props.location.state.data.props.data.name;
        const {userName,title, auther,time,ticketId,movieName,id,img}=this.state
        
        
    return(
        
        <div className="row" style={{"background-color": "#1a1110"}}>
           &nbsp;&nbsp;&nbsp;
            <div className="body">
                <div className="signup-form">
                    <form onSubmit={this.submitHandler} >
		                <h2>Book Ticket</h2>
		                    <p style={{"color":"#43b3ae"}}>Book a seat now for the movie:!!</p>
                            <div className="form-group">
                                <label  class="form-label" style={{"color":"#43b3ae"}}>Movie Name:<span style={{"color":"#483d8b"}}> <b>
                                {name} </b></span>
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="userName" placeholder="Your Name"  value={userName}
                                onChange={this.changeHandler} required></input>
                           
		                <div className="form-group">&nbsp;
                                <input type="text" className="form-control" name="author" placeholder="Number of Seats" value={auther}
                                onChange={this.changeHandler} required></input>
                        </div>
                        <div className="form-group">
                            <input type="date"  name="title" value={title} onChange={this.changeHandler} class= "form-control" 
                             placeholder= "Select show date" required>

                            </input>
                                
                            </div>
                        
                        <div className="form-group">
                            <select id="country" name="time" className="form-group" value={time}
                                onChange={this.changeHandler} required>
                                    <option value="select">Select Time..</option>
                                <option value={this.props.location.state.data.props.data.showtime1}>
                                    {this.props.location.state.data.props.data.showtime1}
                                </option>
                                <option value={this.props.location.state.data.props.data.showtime2}>
                                    {this.props.location.state.data.props.data.showtime2}
                                </option>
                                 <option value={this.props.location.state.data.props.data.showtime3}>
                                    {this.props.location.state.data.props.data.showtime3}
                                </option>
                            </select>
                        </div>
                        </div>
		                    
		                <div className="form-group">
                        
                                <button type="submit" className="btn btn-primary btn-lg">Book</button>
                                &nbsp;&nbsp;
                                <Link to={`/ticket/${this.state.ticketId}`}>
                                <button type="info" className="btn btn-primary btn-lg" style={{"background-color": "#32cd32"}}>Show</button>
                                </Link> 
                                
                        </div>
                     </form>
                     &nbsp;
                                &nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
    }
}
export default  TicketBooking;