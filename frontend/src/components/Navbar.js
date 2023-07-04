import navbar from '../assets/partial-css/navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';





function Navbar(){
     const [isShown, setIsShown] = useState(false);
     const [isFocused, setIsFocused] = useState(false);
     const [query, setQuery] = useState("");

     return(
          <div className="navbar-container">
               <div className="navbar-desktop">
                    <div className="nav-start">
                         <div className="nav-brand">
                              <img src="/images/flix2.png" alt="FLIX-DB" className="nav-brand-img" />
                         </div>
                         <div className="nav-list">    
                              <Link>HOME</Link>
                              <Link>TV SHOWS</Link>
                              <Link>MOVIES</Link>
                              <Link>ALL</Link>
                         </div>
                    </div>
                    <div className="nav-end">
                         <form className= {isShown || isFocused ? "nav-query nav-query-show" : "nav-query nav-query-hide"}>
                              <input type="text"
                              onMouseEnter={() => setIsShown(true)}
                              onMouseLeave={() => setIsShown(false)}
                              onFocus= {() => setIsFocused(true)}
                              onBlur={() => {setIsFocused(false); setQuery("")}}
                              className= {isShown || isFocused ? "show-input" : "hide-input" } 
                              placeholder={isShown || isFocused ? "Search ..." : ""}
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                              />
                              <img 
                              src="/images/clear.png"
                              className={ isFocused && (query !== "") ? "clear-btn-show" : "clear-btn-hide" }
                              onClick={ () => setQuery("") }
                              />
                              <button
                              onMouseEnter={() => setIsShown(true)}
                              onMouseLeave={() => setIsShown(false)}
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