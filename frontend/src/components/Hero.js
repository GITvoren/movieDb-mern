import hero from '../assets/partial-css/hero.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Tabs from './Tabs.js';
import Carousel from './Carousel.js';
import Slider from './Slider.js';


function Hero(){
     return(
          <>
               <div className="hero-wrapper">
                         <Slider />
                    {/* <div>
                         <div className="hero-main-trailer">
                              <LiteYouTubeEmbed 
                                   id="avz06PDqDbM"
                                   title="Mission Impossible Dead Reckoning Part 1 Trailer"
                                   className="video-player"
                              />
                         </div>
                         <span className="type-tag">TRAILERS</span>
                         <h1 className="trailer-title">Mission: Impossible – Dead Reckoning Part One Trailer</h1>
                    </div> */}
                         <Tabs />
               </div>
               <div>
                    <Carousel />
               </div>
          </>
     );
}

export default Hero;