import hero from '../assets/partial-css/hero.css';
import Tabs from './Tabs.js';
import Slider from './Slider.js';


function Hero(){
     return(
          <>
               <div className="hero-wrapper">
                         <Slider />
                         <Tabs />
               </div>
          </>
     );
}

export default Hero;