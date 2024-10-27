import Hero from './Hero';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';

const Home = () => {
  return (
    <>
      <div className="hero container grid">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Your favorite place for delicious food and great times.</p>
          <Hero />
        </div>
      </div>
      <Specials />
      <CustomersSay />
      <Chicago  />
    </>
  );
};

export default Home;