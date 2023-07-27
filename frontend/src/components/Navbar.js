import navbar from '../assets/partial-css/navbar.css';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';





function Navbar(){
     const [isShown, setIsShown] = useState(false);
     const [isFocused, setIsFocused] = useState(false);
     const [query, setQuery] = useState("");
     const ref = useRef(null);
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });
     const [ isToggled , setIsToggled ] = useState(false);


     return(
          <div className="navbar-container">
               <div className="navbar-desktop">
                    <div className="nav-start">
                         <div className="nav-brand">
                              <img src="/images/flix2.png" alt="FLIX-DB" className="nav-brand-img" />
                         </div>
                         <div className="nav-list">
                              <Link>MOVIES</Link>
                              <Link>TV SHOWS</Link>
                              <Link>UPCOMING</Link>
                              <Link className="link-dropdown">MORE
                                   <div className="dropdown-sub">
                                        <div className="dropdown-list-container">
                                             <div className="dropdown-list">
                                                  <Link className="sub-links" to="#top">Discussions</Link>
                                                  <Link className="sub-links">Requests</Link>
                                                  <Link className="sub-links">Contact</Link>
                                             </div>
                                        </div>    
                                   </div>
                              </Link>
                         </div>
                         <div className="toggle">
                              { 
                              !isToggled ?
                              <img src="/images/bars.png"
                               className="bars"
                               onClick = {() => setIsToggled(!isToggled)} 
                               />
                               :
                               <img src="/images/annclose.png"
                               className="mobile-close"
                               onClick = {() => setIsToggled(!isToggled)}
                                />
                                }

                              { isToggled && 
                                   <div className="mobile-nav-list">
                                        <Link>MOVIES</Link>
                                        <Link>TV SHOWS</Link>
                                        <Link>UPCOMING</Link>
                                        <Link className="link-dropdown">MORE
                                             <div className="dropdown-sub">
                                                  <div className="dropdown-list-container">
                                                       <div className="dropdown-list">
                                                            <Link className="sub-links" to="#top">Discussions</Link>
                                                            <Link className="sub-links">Requests</Link>
                                                            <Link className="sub-links">Contact</Link>
                                                       </div>
                                                  </div>    
                                             </div>
                                        </Link>
                                        <hr />
                                        <div className="mobile-account">
                                             <div>
                                                  <Link>Login</Link>
                                                  <Link>Register</Link>
                                             </div>
                                          {/*    <div>
                                                   <Link>Logout</Link>
                                             </div> */}
                                        </div>
                                   </div>
                               }
                         </div>
                    </div>
                    <div className="nav-end">
                         <form className= {isShown || isFocused || isTabletOrMobile ? "nav-query nav-query-show" : "nav-query nav-query-hide"}>
                              <input type="text"
                              ref={ref}
                              onMouseEnter={() => setIsShown(true)}
                              onMouseLeave={() => setIsShown(false)}
                              onFocus= {() => setIsFocused(true)}
                              onBlur={() => setIsFocused(false)}
                              className= {isShown || isFocused ? "show-input" : "hide-input" } 
                              placeholder={isShown || isFocused || isTabletOrMobile ? "Search ..." : ""}
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              />
                              <button
                              onClick={(e) => {e.preventDefault(); setQuery(""); ref.current.focus()}}
                              onMouseEnter={() => setIsShown(true)}
                              onMouseLeave={() => setIsShown(false)}
                              >
                                   <img 
                                   src="/images/clear.png"
                                   className={isFocused && query !== "" ? "clear-btn-show" : "clear-btn-hide" }
                                   />
                              </button>
                              
                              <button
                              onMouseEnter={() => setIsShown(true)}
                              onMouseLeave={() => setIsShown(false)}
                              onClick={e => e.preventDefault()}
                              >
                                   <img src="/images/search.png" className="search-btn" />
                              </button>  
                         </form>
                         <span>|</span>
                         <div className="nav-account">
                              <Link>Login</Link>
                              <Link>Register</Link>
                         </div>
                    </div>
               </div>
          </div>
          
     );
}

export default Navbar;