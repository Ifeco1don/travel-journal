import googleIcon from "../images/google-icon.png";

export default function Entry(props) {
  return (
    <div className="entries">
      <div className="image-container">
        <img src={props.one.img.src} alt={props.one.img.alt} />
      </div>
      <div className="details-container">
        <div className="first-line">
          <img src={googleIcon} alt="Google pointer" />
          <p className="country">{props.one.country}</p>
          <a href={props.one.googleMapsLink}>View on Google Maps</a>
        </div>

        <div className="other-details">
          <h2>{props.one.title}</h2>
          <p className="date">{props.one.dates}</p>
          <p>{props.one.text}</p>
        </div>
      </div>
    </div>
  );
}
