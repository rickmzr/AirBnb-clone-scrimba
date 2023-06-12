import starIcon from "../assets/Star 1.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-pic"
        src={`./public/${props.item.coverImg}`}
        alt={props.item.description}
      />
      <div className="card-stats">
        <img className="card-star-icon" src={starIcon} alt="Star Icon" />
        <span className="card-rating">{props.item.stats.rating}</span>
        <span className="card-location gray-text">
          {" "}
          ({props.item.stats.reviewCount}) • {props.item.location}
        </span>
      </div>
      <p className="card-description">{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
