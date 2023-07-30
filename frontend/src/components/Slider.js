import slider from '../assets/partial-css/slider.css';
import { useState, useRef, useEffect } from 'react';
import slider2 from '../data/slider2.json';


function Slider(){
     const { slides } = slider2;
     const sliderRef = useRef();
     const [toggleActiveDot, setToggleActiveDot] = useState(1);

     const slideLeft = () => {
          if(sliderRef.current.scrollLeft == 0){
               sliderRef.current.scrollLeft += sliderRef.current.clientWidth * 2;
               setToggleActiveDot(3)
          } else {
               sliderRef.current.scrollLeft -= sliderRef.current.clientWidth;

               if(sliderRef.current.scrollLeft == ( sliderRef.current.scrollWidth - sliderRef.current.clientWidth)) {
                    setToggleActiveDot(2)
               } else {
                    setToggleActiveDot(1)
               }
          }
     }

     const slideRight = () => {
          
          if(sliderRef.current.scrollLeft == ( sliderRef.current.scrollWidth - sliderRef.current.clientWidth)){
               sliderRef.current.scrollLeft -= sliderRef.current.clientWidth * 2
               setToggleActiveDot(1)
          } else {
               sliderRef.current.scrollLeft += sliderRef.current.clientWidth;

               if(sliderRef.current.scrollLeft == 0){
                    setToggleActiveDot(2)
               } else {
                    setToggleActiveDot(3)
               }
          }
          
     }

     const handleToggleDot = (dotNumber) => {
          setToggleActiveDot(dotNumber);
          if(dotNumber == 1){
               sliderRef.current.scrollLeft = 0
          } else if(dotNumber == 2){
               sliderRef.current.scrollLeft = (sliderRef.current.scrollWidth - sliderRef.current.clientWidth) / 2
          } else {
               sliderRef.current.scrollLeft = (sliderRef.current.scrollWidth - sliderRef.current.clientWidth)
          }
     }
     
     useEffect(() => {
         window.interval = setInterval(() => {
               slideRight();
          }, 8000)

     }, [])
     


     return(
          <div className="slider-container">
               <div className="slider" ref = { sliderRef }>
                     <button 
                    className="slider-btn-2 left d-block"
                    onClick = { slideLeft }
                    >
                    <img src="/images/slider-left.png" className="arrow-icon left" />
                    </button>
                    <button
                    className="slider-btn-2 right d-block"
                    onClick = { slideRight }
                    >
                        <img src="/images/slider-right.png" className="arrow-icon right" />
                    </button>
                    <div className="dot-container">
                              <span 
                              className={toggleActiveDot === 1 ? "dot active" : "dot"}
                              onClick = { () => handleToggleDot(1) }
                              ></span>
                              <span 
                              className={toggleActiveDot === 2 ? "dot active" : "dot"}
                              onClick = { () => handleToggleDot(2) }
                              ></span>
                              <span 
                              className={toggleActiveDot === 3 ? "dot active" : "dot"}
                              onClick = { () => handleToggleDot(3) }
                              ></span>
                    </div>
                    {
                    slides.map((slide, index) => (
                         <div className="slider-img-container" key = {index}>
                              <img
                              src={slide.src}
                              className="slider-img"
                              draggable = "false"
                              />
                              <div className="slider-content">
                                   <h1 className="slider-content__title">{slide.title}</h1>
                                   <p className="slider-content__desc">{slide.description}</p>
                              </div>
                         </div>
                    ))  

                    }
               </div>
          </div>
     );
}

export default Slider;