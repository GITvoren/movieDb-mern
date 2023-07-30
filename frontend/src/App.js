import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Announcement from './components/Announcement.js';
import Hero from './components/Hero.js';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Trailers from './pages/Trailers.js';





function App(){
  return (
    <>
      <Announcement />
      <Navbar />
      <Routes>
          <Route exact path ="/" element ={<Home />} />
          <Route path ="/trailers/:id" element ={<Trailers />} />
      </Routes>
    </>
  );
}

export default App;
