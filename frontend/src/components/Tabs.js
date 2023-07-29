import tabs from '../assets/partial-css/tabs.css';
import { useState } from 'react';
import slider2 from '../data/slider2.json';

function Tabs(){
     const { trailers, trendings, populars } = slider2;

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
                    >Trending</li>
                    <li 
                    className={toggleActiveTab === 3 ? "tabs active" : "tabs"}
                    onClick={() => handleToggleTab(3)}
                    >Popular</li>
               </ul>
               <div className={toggleActiveTab === 1 ? "nav-content active" : "nav-content"}>

                    {trailers.map(trailer => (
                              <div className="tabs-subcontainer" key = {trailer.id}>
                                   <div className="tabs-img-container">
                                        <img src={trailer.src}
                                        className="tabs-img"
                                        draggable = "false"
                                         />
                                   </div>
                                   <div className="tabs-content">
                                        <h2>{trailer.title}</h2>
                                        <div className="date-time">
                                             <img src="/images/clock.png" />
                                             <p>{trailer.date}</p>
                                        </div>
                                   </div>
                              </div>
                    )
               )

                    }
               </div>
               <div className={toggleActiveTab === 2 ? "nav-content active" : "nav-content"}>
               {trendings.map((trending, index) => (
                              <div className="tabs-subcontainer" key = {index}>
                                   <div className="tabs-img-container">
                                        <img src={trending.src}
                                        className="tabs-img"
                                        draggable = "false"
                                         />
                                   </div>
                                   <div className="tabs-content">
                                        <h2>{trending.title}</h2>
                                        <div className="date-time">
                                             <img src="/images/clock.png" />
                                             <p>{trending.date}</p>
                                        </div>
                                   </div>
                              </div>
                    )
               )

                    }
               </div>
               <div className={toggleActiveTab === 3 ? "nav-content active" : "nav-content"}>
               {populars.map((popular, index) => (
                              <div className="tabs-subcontainer" key = {index}>
                                   <div className="tabs-img-container">
                                        <img src={popular.src}
                                        className="tabs-img"
                                        draggable = "false"
                                         />
                                   </div>
                                   <div className="tabs-content">
                                        <h2>{popular.title}</h2>
                                        <div className="date-time">
                                             <img src="/images/clock.png" />
                                             <p>{popular.date}</p>
                                        </div>
                                   </div>
                              </div>
                    )
               )

                    }
               </div>
          </div>
     );
}

export default Tabs;