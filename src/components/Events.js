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
                'http://localhost:8000/posts'
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
        <h2 style={{"color": "white","font-family": "Trebuchet MS", "border-bottom": "1px"}}><b>Events</b> </h2> 
               
            {posts.map((item) => (
                <div className="col-md-3 mt-3 mb-3"  >
                
				<div className="card-body">
                
           <img className="card-img-top" style={{width: "16rem", height:"300px"}} src={item.img} alt={item.name}/>
                   
                   
          </div>
      </div>
			))}
            
      </div>

    )
}