import announcement from '../assets/partial-css/announcement.css';
import { useState } from 'react';

function Announcement(){

     const [ show, setShow ] = useState(true);

     const close = () => {
          setShow(false);
     }

     return(
          <div>
          { show &&          
               <span className="announcement">
                    <span>Project Status: &ensp;</span>
                    <span>In Development . . .</span>
                    <img src="/images/annclose.png"
                    className="ann-close-btn-img"
                    onClick={close} />
               </span>
          }
          </div>    
     )
}

export default Announcement;