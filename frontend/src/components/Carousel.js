import carousel from '../assets/partial-css/carousel.css';

function Carousel(){
     return(
          <div className="carousel-wrapper">
               <h2>Featured Shows</h2>
               <div className="carousel">
                   <img 
                    src="/images/shooter.jpg"
                    className="carousel-img"
                     />
                    <img 
                    src="/images/last_kingdom.jpg"
                    className="carousel-img"
                     />
                    <img 
                    src="/images/unauthorized_living.jpg"
                    className="carousel-img"
                     />
                    <img 
                    src="/images/el_dragon.jpg"
                    className="carousel-img"
                     />
                    <img 
                    src="/images/valhalla.jpg"
                    className="carousel-img"
                     />
                    <img 
                    src="/images/protector.jpg"
                    className="carousel-img"
                     />
                    <img 
                    src="/images/blacklist.jpg"
                    className="carousel-img"
                     />
                     <img 
                    src="/images/kings.jpg"
                    className="carousel-img"
                     />
                    <img 
                    src="/images/vikings.jpg"
                    className="carousel-img"
                     />
               </div>
          </div>
     );
}

export default Carousel;