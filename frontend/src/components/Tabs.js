import tabs from '../assets/partial-css/tabs.css';
import { useState } from 'react';

function Tabs(){

     const [toggleActiveTab, setToggleActiveTab] = useState(1);

     const handleToggleTab = (tabNumber) => {
          setToggleActiveTab(tabNumber);
     }

     return(
          <div className="tabs-container">
               <ul className="nav-tabs">
                    <li 
                    className={toggleActiveTab === 1 ? "tabs active" : "tabs"}
                    onClick={() => handleToggleTab(1)}
                    >Trailers</li>
                    <li 
                    className={toggleActiveTab === 2 ? "tabs active" : "tabs"}
                    onClick={() => handleToggleTab(2)}
                    >Upcoming</li>
                    <li 
                    className={toggleActiveTab === 3 ? "tabs active" : "tabs"}
                    onClick={() => handleToggleTab(3)}
                    >Popular</li>
               </ul>
               <div className={toggleActiveTab === 1 ? "nav-content active" : "nav-content"}>
                    <h1>trailers content test</h1>
               </div>
               <div className={toggleActiveTab === 2 ? "nav-content active" : "nav-content"}>
                    <h1>upcoming content test</h1>
               </div>
               <div className={toggleActiveTab === 3 ? "nav-content active" : "nav-content"}>
                    <h1>popular content test</h1>
               </div>
          </div>
     );
}

export default Tabs;