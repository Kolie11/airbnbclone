import AirbnbLogo from "../assets/airbnblogo.png";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <img src={AirbnbLogo} alt="logo airbnb" className="logo" />
      </nav>
    </div>
  );
};

export default Navbar;
