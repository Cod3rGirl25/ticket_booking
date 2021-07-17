import React from "react";
import axios from "axios";
import MovieDescription from "./MovieDescription.js";
import {Link} from "react-dom";
import Book from './TicketBooking';
export default class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            moviedetails:{}
        }
    }
    componentDidMount(){
        console.log("id fromcake details api" , this.props.match.params.id)
        axios({
            method:'get',
            url:"http://localhost:6700/posts/"+this.props.match.params.id
        }).then((response)=>{
            console.log("response fromcake details api" , response.data)
            this.setState({
                moviedetails:response.data
                   
                   
                })
        },(error)=>{
            console.log("error fromcake details api" , error)

        })
        console.log("response fromcake details api" , this.props.moviedetails)
    }
    render(){
    
        return(
           
            <div className="row">
                
                <MovieDescription  data={this.state.moviedetails}/>
               
            </div>
             
           
        )
    }
    
}

