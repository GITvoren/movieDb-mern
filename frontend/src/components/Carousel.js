import carousel from '../assets/partial-css/carousel.css';
import { useRef, useState } from 'react';

function Carousel(){
     const carouselRef = useRef();
     let isDragStart = false;
     let prevPageX;
     let prevScrollLeft;

     const dragStart = (e) => {
          isDragStart = true;
          prevPageX = e.pageX;
          prevScrollLeft = carouselRef.current.scrollLeft;
     }

     const dragging = (e) => {
          if(!isDragStart) return;

          e.preventDefault();

          let positionDiff = e.pageX - prevPageX;

          carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
     }

     const dragStop = () => {
          isDragStart = false;
     }

     return(
          <div className="carousel-wrapper">
               <h2>Featured Shows</h2>
               <div className="carousel"
               onMouseMove = { dragging } 
               ref= { carouselRef }
               onMouseDown = { dragStart }
               onMouseUp = { dragStop }
               >
                    <button className="slider-btn left">
                        <img src="/images/slider-left.png" className="arrow-icon left" />
                    </button>
                    <button className="slider-btn right">
                        <img src="/images/slider-right.png" className="arrow-icon right" />
                    </button>
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