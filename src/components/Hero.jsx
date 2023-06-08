import imageTiles from "../assets/Group 77.png";

export default function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-img" src={imageTiles} alt="Collage of experiences" />
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts--all
        without leaving home.
      </p>
    </section>
  );
}
