import hero from '../assets/partial-css/hero.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


function Hero(){
     return(
          <div className="hero-wrapper">
               <div className="hero-main-trailer">
                     <LiteYouTubeEmbed 
                         id="avz06PDqDbM"
                         title="Mission Impossible Dead Reckoning Part 1 Trailer"
                         className="video-player"
                    />
               </div>
               <div className="hero-tabs">

               </div>
          </div>
     )
}

export default Hero;