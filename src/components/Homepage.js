import Hero from './Hero';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import restaurantchef from '../assets/restaurant chef B.jpg';

const Home = () => {
  return (
    <>
      <div class="hero-background">
        <div className="hero container grid">
          <div className="hero-content">
            <div>
              <h1 className='title'>Little Lemon</h1>
              <h3 className='subtitle'>Chicago</h3>
              <p>Your favorite place for delicious food and great times.</p>
              <Hero />
            </div>
            <img class="image" src={restaurantchef} alt="Restarurant food" height="200" width="200"></img>
          </div>
        </div>
      </div>
      <Specials />
      <CustomersSay />
      <Chicago  />
    </>
  );
};

export default Home;