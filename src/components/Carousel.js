export default function(){
    let image1 = "slider1.jpg"
    let image2 = "slider2.jpg"
    let image3 = "slider3.jpg"

    let cakeimagestyle = {
        height:"25rem"
    }

    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
                <img style={cakeimagestyle} src={image1} className="d-block w-100" alt="..." />
          </div>
         <div className="carousel-item">
                <img style={cakeimagestyle} src={image2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img style={cakeimagestyle} src={image3} className="d-block w-100" alt="..." />
          </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
    
      </a>
      </div>
    )
}