import React, { useEffect, useState } from "react";
import axios from 'axios';


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
              <marquee> <h2 style={{"color": "#ea3c53","font-family": "Trebuchet MS", "border-bottom": "1px"}}><b>Coming Soon !!!</b> </h2> </marquee>
               
            {posts.map((item) => (
                <div className="col-md-3 mt-3 mb-3"  >
                <div className="card" style={{"width": "19rem"}}>
				 <div className="card-body">
                <div  key={item.id} class="card" style={{width: "16rem", background:"#f0fff0"}} > 
                <img className="card-img-top" style={{width: "16rem", height:"300px"}} src={item.img3} alt={item.name}/>
                    
                    </div>
                </div>
                </div>
                </div>
			))}
            
            </div>

    )
}