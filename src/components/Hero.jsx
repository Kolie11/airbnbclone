import AirbnbGrid from "../assets/airbnbgrid.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={AirbnbGrid} alt="images rbn" className="image-grid" />

      <h1 className="title">Online Experiences</h1>
      <p className="text">
        Join unique interactive activities led by one-of-a-kind hosts-ll without
        leaving home.
      </p>
    </section>
  );
};

export default Hero;
