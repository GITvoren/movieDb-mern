import slider from '../assets/partial-css/slider.css';


function Slider(){
     return(
          <div className="slider-container">
               <div className="slider">
                     <button 
                    className="slider-btn-2 left d-block"
                    >
                    <img src="/images/slider-left.png" className="arrow-icon left" />
                    </button>
                    <button
                    className="slider-btn-2 right d-block"
                    >
                        <img src="/images/slider-right.png" className="arrow-icon right" />
                    </button>
                    <div className="dot-container">
                              <span className="dot"></span>
                              <span className="dot active"></span>
                              <span className="dot"></span>
                    </div>
                    <div className="slider-img-container">
                         <img
                         src="/images/darksouls.jpg"
                         className="slider-img"
                         draggable = "false"
                         />
                         <div className="slider-content">
                              <h1 className="slider-content__title">Dark Souls In The Works For Netflix</h1>
                              <p className="slider-content__desc">Netflix isn't giving up on game adaptations just yet. This would be one of the company's first truly original animation series.</p>
                         </div>
                    </div>
                    <div className="slider-img-container">
                         <img
                         src="/images/onepiece.jpg"
                         className="slider-img"
                         draggable = "false"
                         />
                          <div className="slider-content">
                              <h1 className="slider-content__title">Lorem</h1>
                              <p className="slider-content__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facilis ipsum distinctio ipsam? Modi, libero?</p>
                         </div>
                    </div>
                    <div className="slider-img-container">
                         <img
                         src="/images/devils_plan.jpg"
                         className="slider-img"
                         draggable = "false"
                         />
                          <div className="slider-content">
                              <h1 className="slider-content__title">Lorem</h1>
                              <p className="slider-content__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facilis ipsum distinctio ipsam? Modi, libero?</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Slider;