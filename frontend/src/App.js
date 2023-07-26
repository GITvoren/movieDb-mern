import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Announcement from './components/Announcement.js';
import Hero from './components/Hero.js';




function App(){
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="main-container">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
