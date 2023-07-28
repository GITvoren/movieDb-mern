import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Announcement from './components/Announcement.js';
import Hero from './components/Hero.js';
import Slider from './components/Slider.js';





function App(){
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="main-container">
        <Hero />
        <Slider />
      </div>
      <Footer />
    </>
  );
}

export default App;
