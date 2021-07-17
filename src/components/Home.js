import React from 'react';
import Slider from './Carousel';
import Rm from './RecomendedMovies';
export default function Home(){
    return(
        <div className="row" style={{"background":"#36454f"}}>
            <Slider />
            <Rm />
        </div>
    )
    }