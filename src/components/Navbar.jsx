import airbnbLogo from "../assets/airbnb 1.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={airbnbLogo} alt="Airbnb Logo" className="nav-logo" />
      </nav>
    </>
  );
}
