import starIcon from "../assets/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-pic"
        src={`./public/${props.img}`}
        alt={props.description}
      />
      <div className="card-stats">
        <img className="card-star-icon" src={starIcon} alt="Star Icon" />
        <span className="card-rating">{props.rating}</span>
        <span className="card-location gray-text">
          {" "}
          ({props.reviewCount}) • {props.location}
        </span>
      </div>
      <p className="card-description">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
