import announcement from '../assets/partial-css/announcement.css';
import { useState } from 'react';

function Announcement(){

     const [ show, setShow ] = useState(true);

     return(
          <div>
          { show &&          
               <span className="announcement">
                    <span>Project Status: &ensp;</span>
                    <span>In Development . . .</span>
                    <img src="/images/annclose.png"
                    className="ann-close-btn-img"
                    onClick={() => setShow(false)} />
               </span>
          }
          </div>    
     )
}

export default Announcement;