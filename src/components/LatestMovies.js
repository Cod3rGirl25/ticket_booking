import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import Dt from './Details';




export default function RecomendedMovies(){
        const [posts, setPosts] = useState([])
	useEffect(async () => {
            //fetch("http://localhost:6700/posts")
			//.then((response) => response.json())
			//.then((data) => {
			//	setPosts(data) // new
			//})
            axios.get(
                'https://json-movie-dtls.herokuapp.com/posts'
              ).then(res =>{
                  console.log(res)
                  setPosts(res.data);
              })
              .catch(error =>{
                console.log(error) 
              })
 
              
              
	
	}, [])

	return (
		
			<div className="row" >
              <center><h1 style={{"color": "#43b3ae","font-family": "Trebuchet MS", "border-bottom": "1px"}}> <b>Latest Movies</b>
              </h1> </center>
               
            {posts.map((item) => (
                <div className="col-md-3 mt-3 mb-3"  >
                <div className="card" style={{"width": "19rem"}}>
				 <div className="card-body">
                    <div  key={item.id} class="card" style={{width: "16rem", background:"#f0fff0"}} > 
                     <Link to={`/latestmovies/${item.id}`}>  
                         <img className="card-img-top" style={{width: "100%", height:"300px"}} src={item.img} alt={item.name}/>
                         </Link>
                    <div className="card-body" style={{background:"#e0ffff"}}>
                        <Link to={`/latestmovies/${item.id}`}><button className="btn btn" style={{"background-color": "#32cd32","font-family": "arial", color:"white"}}  type="submit">Details</button></Link>
                        &nbsp;&nbsp;&nbsp; 
                        <Link to={`/latestmovies/${item.id}`}> <button className="btn btn" style={{"background-color": "#e2062c","font-family": "arial", color:"white"}}  type="submit">Book</button></Link>
                    
                   
                    </div>
                    </div>
                </div>
                </div>
                </div>
			))}
            
            </div>

    )
}