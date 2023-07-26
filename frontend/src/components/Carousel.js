import carousel from '../assets/partial-css/carousel.css';
import { useRef, useState, useEffect } from 'react';

function Carousel(){
     const carouselRef = useRef();
     const leftArrowRef = useRef();
     const rightArrowRef = useRef();
     let isDragStart = false;
     let prevPageX;
     let prevScrollLeft;
    /*  let scrollWidth = carouselRef.current.scrollWidth - carouselRef.current.clientWidth; */

   const [ atStart, setAtStart ] = useState(true);
   const [ atEnd, setAtEnd ] = useState(false);

     const dragStart = (e) => {
          isDragStart = true;
          prevPageX = e.pageX;
          prevScrollLeft = carouselRef.current.scrollLeft;
          carouselRef.current.classList.remove("smooth");
          carouselRef.current.classList.add("not-smooth");
     }

     const dragging = (e) => {
          e.preventDefault();

          if(!isDragStart)
          return false;

          let positionDiff = e.pageX - prevPageX;

          carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
     }

     const dragStop = () => {
          isDragStart = false;
          carouselRef.current.classList.remove("not-smooth");
          carouselRef.current.classList.add("smooth");
     }

     const slideLeft = () => {
          carouselRef.current.scrollLeft -= 350;
     }

     const slideRight = () => {
          carouselRef.current.scrollLeft += 350;
     }

     const reactToScrolling = (e) => {
          setTimeout(() =>  {e.target.scrollLeft !== 0 ? setAtStart(false) : setAtStart(true) }, 250);
          setTimeout(() =>  {e.target.scrollLeft == 672 ? setAtEnd(true) : setAtEnd(false) }, 250);
     }

     return(
          <div className="carousel-wrapper">
               <h2>Featured Shows</h2>
               <div className="carousel"
               onMouseMove = { dragging } 
               ref= { carouselRef }
               onMouseDown = { dragStart }
               onMouseUp = { dragStop }
               onScroll = { reactToScrolling }
               onMouseLeave = { dragStop }
               >
                    <button 
                    className={atStart? "slider-btn left d-none" : "slider-btn left d-block"}
                    onClick= { slideLeft }
                    ref = { leftArrowRef }
                    >
                    <img src="/images/slider-left.png" className="arrow-icon left" />
                    </button>
                    <button
                    className={atEnd ? "slider-btn right d-none" : "slider-btn right d-block"}
                    onClick= { slideRight }
                    ref = { rightArrowRef }
                    >
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