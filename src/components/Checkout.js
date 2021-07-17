import React from "react";
import axios from "axios";
import MovieDescription from "./MovieDescription.js";
import {Link} from "react-router-dom";
import Book from './TicketBooking';
import './style.css';

var QRCode = require('qrcode.react');

export default class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            moviedetails:{}
        }
    }
    componentDidMount(){
        console.log("id fromcake details api" , this.props.match.params.ticketid)
        axios({
            method:'get',
            url:"http://localhost:5000/posts/"+this.props.match.params.ticketid
        }).then((response)=>{
            console.log("response from ticket details api" , response.data)
            this.setState({
                moviedetails:response.data

                
                   
                })
        },(error)=>{
            console.log("error fromcake details api" , error)

        })
        console.log("response yo details api" , this.state.moviedetails) 
        
    }
    render(){
        
        const data="Movie:"+"\n"+this.state.moviedetails.movieName+"\n "+"Owner:"+" "+this.state.moviedetails.userName+" "+
        "Admits:" +" "+this.state.moviedetails.author+" "+"Show Date:"+" "+this.state.moviedetails.title+" "+"Show Time:"+" "
        +this.state.moviedetails.time;
        

        return(
           
            <div className="row" style={{"background-color": "#000000"}}>
                 <center><h1 style={{"color": "#43b3ae","font-family": "Trebuchet MS", "border-bottom": "1px"}}> Ticket Details</h1> </center>
                 <center> 
                    <div className="container"  >
                        <div className="card" style={{"width": "19rem"}}>
				            <div className="card-body">
                            <img  className="card-img-top" src={this.state.moviedetails.img} alt={this.state.moviedetails.movieName}/>
                            </div>
                            <div className="card-body" style={{background:"#e0ffff"}}>
                                <div>
                                    <QRCode value = {data} />
                                   
                                </div>
                            </div>
                        </div>
                        
				        <div className="right"style={{"margin-left": " 50px", "margin-top": "20px", "height": "16rem"}}>
                            <p> <h6><span style={{"color":"#43b3ae"}}>Movie:</span> {this.state.moviedetails.movieName}</h6>
                                <h6><span style={{"color":"#43b3ae","margin-left": "-5px",}}>Owner:</span>
                                &nbsp;{this.state.moviedetails.userName}</h6>
                                <h6><span style={{"color":"#43b3ae"}}>Admits:</span>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {this.state.moviedetails.author} </h6>
                                <h6><span style={{"color":"#43b3ae"}}>Show Date:</span>{this.state.moviedetails.title}</h6>
                                <h6><span style={{"color":"#43b3ae"}}>Show Time:</span>{this.state.moviedetails.time}</h6>
                                <h6 style={{"color":"#43b3ae"}}> &#8592;&nbsp;&nbsp;  Scan the QR code for ticket details </h6>
                                <Link  aria-current="page" to ="/">
                                    <button className="btn btn" style={{"background-color": "#e2062c","font-family": "arial", color: "white"}}>
                                    Home</button>
                                </Link>
                            </p>
                            
                            
                                    
                        </div>
                        
                        
                    </div>
                </center>
                
            </div>
             
           
        )
    }
    
}

