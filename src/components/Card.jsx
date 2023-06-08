import katie from "../assets/image 12.png";
import starIcon from "../assets/Star 1.png";

export default function Card() {
  return (
    <div className="card-container">
      <img
        className="card-pic"
        src={katie}
        alt="Katie Zaferes in her swim competition uniform"
      />
      <div className="card-stats">
        <img className="card-star-icon" src={starIcon} alt="Star Icon" />
        <span className="card-rating">5.0</span>
        <span className="card-location gray-text"> (6) • USA</span>
      </div>
      <p className="card-description">Life lessons with Katie Zaferes</p>
      <p className="card-price">
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
