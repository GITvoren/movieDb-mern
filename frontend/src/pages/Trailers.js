import trailers from '../assets/partial-css/trailers.css';
import hero from '../assets/partial-css/hero.css';
import { useParams } from 'react-router-dom';
import slider2 from '../data/slider2.json';
import { useState, useEffect } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function Trailers(){
     const { trailers } = slider2;
     const { id } = useParams();
     const [ theTrailer, setTheTrailer ] = useState({});

     useEffect(() => {
          clearInterval(window.interval);

          trailers.filter(trailer => {
               if(trailer.id == id){
                    setTheTrailer(trailer);
               }
          });

     }, [])


     return(
          <div className="main-container">
               <div className="trailer-container">
                    <div className="video-container">
                         <div className="hero-main-trailer">
                              <LiteYouTubeEmbed 
                                   id={theTrailer.id}
                                   title={theTrailer.title}
                                   className="video-player"
                               />
                         </div>
                         <div>
                              <span className="type-tag">TRAILERS</span><br />
                              <h1 className="trailer-title">{theTrailer.title}</h1>
                              <div className="date-time">
                                   <img src="/images/clock.png" />
                                   <p>{theTrailer.date}</p>
                              </div>  
                         </div> 
                    </div>
                    <div className="synopsis-container">
                         <p>
                              "{theTrailer.description}"
                         </p>
                    </div>
               </div>
          </div>
     );
}

export default Trailers;