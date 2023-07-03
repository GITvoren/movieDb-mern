import navbar from '../assets/partial-css/navbar.css';
import { Link } from 'react-router-dom';





function Navbar(){
     return(
          <div className="navbar-container">
               <div className="navbar-desktop">
                    <div className="nav-start">
                         <div className="nav-brand">
                              <img src="" alt="FLIX-DB" className="nav-brand-img" />
                         </div>
                         <div className="nav-list">    
                              <Link>HOME</Link>
                              <Link>TV SHOWS</Link>
                              <Link>MOVIES</Link>
                              <Link>ALL</Link>
                         </div>
                    </div>
                    <div className="nav-end">
                         <form className="nav-query">
                              <input type="text" placeholder="Search ..." />
                              <button>
                                   <img src="" />
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