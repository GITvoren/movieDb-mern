import Hero from '../components/Hero.js';
import Carousel from '../components/Carousel.js';

function Home(){
     return(
          <div className="main-container">
               <Hero />
               <Carousel />
          </div>
     );
}

export default Home;